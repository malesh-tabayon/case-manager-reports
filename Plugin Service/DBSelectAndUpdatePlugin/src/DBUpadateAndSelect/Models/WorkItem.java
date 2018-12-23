package DBUpadateAndSelect.Models;

import java.sql.Date;

/**
 * @author Nourhan Ali
 *
 */
public class WorkItem
{
	private String stepName;
	private String stepOwner;
	private String status;
	private Date receviedAt;
	private String Creator;
	private Date completedAt;
	private String  time ;
	public String getStepName() {
		return stepName;
	}
	public void setStepName(String stepName) {
		this.stepName = stepName;
	}
	public String getStepOwner() {
		return stepOwner;
	}
	public void setStepOwner(String stepOwner) {
		this.stepOwner = stepOwner;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public Date getReceviedAt() {
		return receviedAt;
	}
	public void setReceviedAt(Date receviedAt) {
		this.receviedAt = receviedAt;
	}
	
	public String getCreator() {
		return Creator;
	}
	public void setCreator(String creator) {
		Creator = creator;
	}
	public Date getCompletedAt() {
		return completedAt;
	}
	public void setCompletedAt(Date completedAt) {
		this.completedAt = completedAt;
	}
	public String getTime() {
		return time;
	}
	public void setTime(String time) {
		this.time = time;
	}
	
       
	
	
}
