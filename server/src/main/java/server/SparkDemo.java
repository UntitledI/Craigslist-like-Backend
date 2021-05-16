package server;

import com.google.gson.Gson;
import dao.ListingDao;
import dto.ListingDto;
import dto.ResponseDto;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.function.Predicate;
import java.util.stream.Collectors;

import static spark.Spark.*;

public class SparkDemo {

  private static Gson gson = new Gson();

  public static void main(String[] args) {
    port(1235);
    webSocket("/ws", WebSocketHandler.class);
    post("/api/createListing", (request, response) -> {
      String body = request.body();
      List<ListingDto> addList= new ArrayList<>();
      ListingDto listing = gson.fromJson(body,ListingDto.class);
      ListingDto newListing = ListingDao.getInstance().put(listing);
      addList.add(newListing);
      return addList.size();
    });

    delete("/api/deleteListing", (request, response) -> {
      String id = request.params("id");
      ListingDao.getInstance().delete(id);
      List<ListingDto> delete = new ArrayList<>();
      ResponseDto deleteItem = new ResponseDto(new Date(), delete, true);
      return deleteItem;
    });

    get("api/viewListings", (request, response) -> {
      // call listing dao getitems, put the returned list into responsedto and return that
      ResponseDto viewItem = new ResponseDto(new Date(), ListingDao.getInstance().getItems(), true);
      return gson.toJson(viewItem);
    });

    get("/api/filterListings", (request, response) -> {
      String email = request.params("email");
      List<ListingDto> toFilter = ListingDao.getInstance().getItems();
      Predicate<ListingDto> byEmail = itemDto -> itemDto.email.equals(email);
      List<ListingDto> postFilter = toFilter.stream().filter(byEmail)
              .collect(Collectors.toList());
      ResponseDto filteredListings = new ResponseDto(new Date(),postFilter, true);
      return gson.toJson(postFilter);
    });



  }
}
