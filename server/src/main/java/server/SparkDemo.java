package server;

import com.google.gson.Gson;

import java.util.ArrayList;
import java.util.List;

import static spark.Spark.*;

public class SparkDemo {
  public static void main(String[] args) {
    port(1235);
    webSocket("/ws", WebSocketHandler.class);
    post("/api/createListing", (request, response) -> {
      String body = request.body();

      return null;
    });

    delete("/api/deleteListing", (request, response) -> {
      return null;
    });

    get("api/viewListings", (request, response) -> {
      return null;
    });



  }
}
