CREATE PROCEDURE [dbo].[INSERT_NEW_STEP]
( 
@step_name VARCHAR(50)  OUTPUT,
 @case_id VARCHAR(225)  OUTPUT,
 @step_owner VARCHAR(225)  OUTPUT ,
 @status varChar(50)  OUTPUT,
 @creater VARCHAR(225)  OUTPUT)
AS
BEGIN
insert into TrackingMovment (step_name,case_id,step_owner,status,creater) values(@step_name,@case_id,@step_owner,@status,@creater)
End;