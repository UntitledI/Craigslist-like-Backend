package server;

import com.google.gson.Gson;
import dao.ListingDao;
import dto.ListingDto;
import dto.ResponseDto;
import processor.AddListingProcessor;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.function.Predicate;

import static spark.Spark.*;

public class SparkDemo {

  private static Gson gson = new Gson();

  public static void main(String[] args) {
    port(1235);
    webSocket("/ws", WebSocketHandler.class);
    post("/api/createListing", (request, response) -> {
      String body = request.body();
      List<ListingDto> addList= new ArrayList<>();
      ListingDto item = gson.fromJson(body,ListingDto.class);
      ListingDto hi = ListingDao.getInstance().put(item);
      addList.add(hi);
      ResponseDto addItem = new ResponseDto(new Date(),addList, true);
      return addItem;
    });

    delete("/api/deleteListing", (request, response) -> {
      String id = request.params("id");
      ListingDao.getInstance().delete(id);
      List<ListingDto> delete = new ArrayList<>();
      ResponseDto deleteItem = new ResponseDto(new Date(), delete, true);
      return deleteItem;
    });

    get("api/viewListings", (request, response) -> {

      return null;
    });

    get("/api/filterListings", (request, response) -> {
      String email = request.params("email");
      List<ListingDto> toFilter = ListingDao.getInstance().getItems();

      return null;
    });



  }
}
