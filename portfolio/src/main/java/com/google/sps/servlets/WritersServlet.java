package com.google.sps.servlets;

import java.util.ArrayList;
import com.google.gson.Gson;
import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/** Handles requests sent to the /hello URL. Try running a server and navigating to /hello! */
@WebServlet("/writers")
public class WritersServlet extends HttpServlet {

  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    //response.setContentType("text/html;");
    //response.getWriter().println("<h1>Hello world!</h1>");

    ArrayList<String> writers = new ArrayList<String>();
    writers.add("Chimamander Adichie");
    writers.add("Wole Soyinka");
    writers.add("Chinua Achebe");
    writers.add("Buchi Emecheta");
    writers.add("Teju Cole");

    Gson gson = new Gson();
    String json = gson.toJson(writers);

    response.setContentType("text/html;");
    response.getWriter().println(json);
  }
}
