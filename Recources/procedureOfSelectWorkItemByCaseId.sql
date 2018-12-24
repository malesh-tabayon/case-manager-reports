CREATE PROCEDURE [dbo].[SELECT_BY_ID]
(@caseid VARCHAR(225)  OUTPUT)
AS
BEGIN
SELECT * FROM TrackingMovment
where case_id=@caseid;
END