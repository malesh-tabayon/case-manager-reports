package DBUpadateAndSelect.DAO;


import java.sql.Connection;
import java.sql.SQLException;
import java.util.Hashtable;

import javax.naming.Context;
import javax.naming.InitialContext;
import javax.naming.NamingException;

public abstract class ConnectionDataBase {
	protected Connection conn;
public final void getConnection() throws SQLException, NamingException
{
	Context context;
    InitialContext initContext;
    javax.sql.DataSource source = null;
	if ((this.conn == null) || (this.conn.isClosed())) {
		String dataSource = getDataSourceName();
		 Hashtable<String, String> hashtable = new Hashtable<String, String>();
         hashtable.put("java.naming.factory.initial", "com.ibm.websphere.naming.WsnInitialContextFactory");
         initContext = new InitialContext(hashtable);
         source = (javax.sql.DataSource)initContext.lookup(dataSource);
         conn=source.getConnection();
	} 
	
}
private static String getDataSourceName() {
	String dataSource = "CMTAROSDS";
	return dataSource;
}

}
