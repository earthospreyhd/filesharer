import java.io.*;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/upload")

public class upload extends HttpServlet {

	protected void doPost (HttpServletRequest req, HttpServletResponse res) 
	throws ServletException, IOException {

		res.setContentType("text/plain");

		PrintWriter out = res.getWriter();

		out.append("hello!");

		out.close();


	}


}