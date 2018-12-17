package DBUpadateAndSelect;

import java.awt.List;
import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.ResultSet;
import java.util.ArrayList;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import DBUpadateAndSelect.Conn.ConnectionDataBase;

import com.google.gson.Gson;
import com.ibm.ecm.extension.PluginService;
import com.ibm.ecm.extension.PluginServiceCallbacks;
import com.ibm.ecm.json.JSONResponse;

import DBUpadateAndSelect.Models.WorkItem;

/**
 * Provides an abstract class that is extended to create a class implementing
 * each service provided by the plug-in. Services are actions, similar to
 * servlets or Struts actions, that perform operations on the IBM Content
 * Navigator server. A service can access content server application programming
 * interfaces (APIs) and Java EE APIs.
 * <p>
 * Services are invoked from the JavaScript functions that are defined for the
 * plug-in by using the <code>ecm.model.Request.invokePluginService</code>
 * function.
 * </p>
 * Follow best practices for servlets when implementing an IBM Content Navigator
 * plug-in service. In particular, always assume multi-threaded use and do not
 * keep unshared information in instance variables.
 */
public class DBSelectService extends PluginService {

	/**
	 * Returns the unique identifier for this service.
	 * <p>
	 * <strong>Important:</strong> This identifier is used in URLs so it must
	 * contain only alphanumeric characters.
	 * </p>
	 * 
	 * @return A <code>String</code> that is used to identify the service.
	 */
	public String getId() {
		return "DBSelectService";
	}

	/**
	 * Returns the name of the IBM Content Navigator service that this service
	 * overrides. If this service does not override an IBM Content Navigator
	 * service, this method returns <code>null</code>.
	 * 
	 * @returns The name of the service.
	 */
	public String getOverriddenService() {
		return null;
	}

	/**
	 * Performs the action of this service.
	 * 
	 * @param callbacks
	 *            An instance of the <code>PluginServiceCallbacks</code> class
	 *            that contains several functions that can be used by the
	 *            service. These functions provide access to the plug-in
	 *            configuration and content server APIs.
	 * @param request
	 *            The <code>HttpServletRequest</code> object that provides the
	 *            request. The service can access the invocation parameters from
	 *            the request.
	 * @param response
	 *            The <code>HttpServletResponse</code> object that is generated
	 *            by the service. The service can get the output stream and
	 *            write the response. The response must be in JSON format.
	 * @throws Exception
	 *             For exceptions that occur when the service is running. If the
	 *             logging level is high enough to log errors, information about
	 *             the exception is logged by IBM Content Navigator.
	 */
	public void execute(PluginServiceCallbacks callbacks,
			HttpServletRequest request, HttpServletResponse response)
			throws Exception {
		 String sqlStmt= "{ call dbo.SelectAllTransactions()}";
		 CallableStatement callStmt;
		 Connection conn;
		// Gson gson=new Gson();
		 ArrayList<WorkItem> workItems=new ArrayList<WorkItem>();
		conn=ConnectionDataBase.getConnection();
		callStmt=conn.prepareCall(sqlStmt); 
		ResultSet rstSet=callStmt.executeQuery();
		WorkItem workItem=new WorkItem();
		while (rstSet.next())
		{
			workItem.setWho(rstSet.getString(1));
			workItem.setReceviedAt(rstSet.getDate(2));
			workItem.setCompletedAt(rstSet.getDate(3));
			workItem.setStatus(rstSet.getString(6));
			workItem.setStepName(rstSet.getString(9));
			workItem.setStepOwner(rstSet.getString(10));
			workItems.add(workItem);
		}
//		String result=gson.toJson(workItems);
//        response.
		JSONResponse jsonResults = new JSONResponse();
		jsonResults.put("result", workItems);
		jsonResults.serialize(response.getOutputStream());
	}
}
