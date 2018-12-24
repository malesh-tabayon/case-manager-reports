CREATE PROCEDURE [dbo].[SELECT_BY_ID]
(@caseid VARCHAR(225)  OUTPUT)
AS
BEGIN
SELECT * , DATEDIFF(MINUTE,recevied_at,completed_at) as duration FROM TrackingMovment
where case_id=@caseid;
END