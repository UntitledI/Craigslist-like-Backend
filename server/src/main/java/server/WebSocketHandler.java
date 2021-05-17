package server;

import org.eclipse.jetty.websocket.api.Session;
import org.eclipse.jetty.websocket.api.annotations.*;
import java.io.*;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

@WebSocket
public class WebSocketHandler {

  static Map<Session,Session> sessionMap = new ConcurrentHashMap<>();

  public static void broadcast(String message) {
    sessionMap.keySet().forEach(session -> {
      try {
        session.getRemote().sendString(message);
      } catch (IOException e) {
        e.printStackTrace();
      }
    });
  }

  public static Integer getClientCount() {
    return sessionMap.keySet().size();
  }
  @OnWebSocketConnect
  public void connected(Session session) throws IOException {
    System.out.println("A client has connected");
    sessionMap.put(session, session);
  }

  @OnWebSocketClose
  public void closed(Session session, int statusCode, String reason) {
    System.out.println("A client has disconnected");
    sessionMap.remove(session);
  }

  @OnWebSocketMessage
  public void message(Session session, String message) throws IOException {
    System.out.println("Got: " + message);   // Print message
  }
}