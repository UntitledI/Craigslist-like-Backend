package server;

import com.google.gson.Gson;
import dao.ListingDao;
import dto.ListingDto;
import dto.ResponseDto;
import dto.BroadcastDto;

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
      System.out.println(body);
      ListingDto listing = gson.fromJson(body,ListingDto.class);
      ListingDao.getInstance().put(listing);

      BroadcastDto broadcastDto = new BroadcastDto(ListingDao.getInstance().getItems(),
              WebSocketHandler.getClientCount());
      WebSocketHandler.broadcast(gson.toJson(broadcastDto));

      return ListingDao.getInstance().getItems().size();
    });

    delete("/api/deleteListing", (request, response) -> {
      String id = request.queryParams("entryId");
      System.out.println(id);
      ListingDao.getInstance().delete(id);
      return ListingDao.getInstance().getItems().size();
    });

    get("api/viewListings", (request, response) -> {
      // call listing dao getitems, put the returned list into responsedto and return that
      ResponseDto viewItem = new ResponseDto(new Date(), ListingDao.getInstance().getItems(), true);
      return gson.toJson(viewItem);
    });

    get("/api/filterListings", (request, response) -> {
      String email = request.queryParams("email");
      System.out.println(email);
      List<ListingDto> toFilter = ListingDao.getInstance().getItems();
      System.out.println(toFilter);
      List<ListingDto> postFilter = toFilter.stream()
              .filter(o -> o.email.equals(email))
              .collect(Collectors.toList());
      System.out.println(postFilter);
      ResponseDto filteredListings = new ResponseDto(new Date(),postFilter, true);
      System.out.println(gson.toJson(filteredListings));
      return gson.toJson(filteredListings);
    });



  }
}
