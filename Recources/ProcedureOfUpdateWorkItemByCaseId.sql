CREATE   PROCEDURE [dbo].[UPDATE_STEP] 
 @case_id VARCHAR(225)  OUTPUT,
 @completed_by VARCHAR(50) OUTPUT,
 @status VARCHAR(225) OUTPUT,
 @step_name VARCHAR(225) OUTPUT
 AS 

BEGIN 

UPDATE TrackingMovment 
SET         
completed_at =GETDATE()  ,
completed_by = @completed_by ,
"status" =@status
where 
case_id=@case_id and  
step_name=@step_name;

End 