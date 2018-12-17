package DBUpadateAndSelect.Models;

import java.sql.Date;

public class WorkItem
{
	private String stepName;
	private String stepOwner;
	private String taskId;
	private String status;
	private Date receviedAt;
	private String Who;
	private Date completedAt;
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
	public String getTaskId() {
		return taskId;
	}
	public void setTaskId(String taskId) {
		this.taskId = taskId;
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
	public String getWho() {
		return Who;
	}
	public void setWho(String who) {
		Who = who;
	}
	public Date getCompletedAt() {
		return completedAt;
	}
	public void setCompletedAt(Date completedAt) {
		this.completedAt = completedAt;
	}
       
	
	
}
