import javax.servlet.*;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

public class NameServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
        //request.getRequestDispatcher("status.jsp").forward(request, response);
        String name = request.getParameter("name");
        PrintWriter pw = response.getWriter();
        try {
            pw.println("Name is " + name);
        }
        finally {
            pw.close();
        }
    }
}
