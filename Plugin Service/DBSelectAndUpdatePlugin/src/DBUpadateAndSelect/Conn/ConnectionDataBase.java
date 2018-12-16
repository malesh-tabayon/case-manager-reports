package DBUpadateAndSelect.Conn;


import java.sql.Connection;
import java.sql.SQLException;
import java.util.Hashtable;

import javax.naming.Context;
import javax.naming.InitialContext;
import javax.naming.NamingException;

public  class ConnectionDataBase {
	public  static Connection conn;
 
	public static Connection getConnection() throws SQLException, NamingException
	{
		
    InitialContext initContext;
    javax.sql.DataSource source = null;
	if ((conn == null) || (conn.isClosed())) {
		String dataSource = getDataSourceName();
		 Hashtable<String, String> hashtable = new Hashtable<String, String>();
         hashtable.put("java.naming.factory.initial", "com.ibm.websphere.naming.WsnInitialContextFactory");
         initContext = new InitialContext(hashtable);
         source = (javax.sql.DataSource)initContext.lookup(dataSource);
         conn=source.getConnection();
         
	} 
	return conn;
	
}
private static String getDataSourceName() {
	String dataSource = "CMTAROSDS";
	return dataSource;
}

}
