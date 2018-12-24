CREATE TABLE [dbo].[TrackingMovment](
	[creater] [varchar](50) NULL,
	[recevied_at] [datetime] NULL,
	[completed_at] [datetime] NULL,
	[completed_by] [varchar](50) NULL,
	[step_id] [varchar](50) NULL,
	[status] [varchar](50) NULL,
	[step_name] [varchar](225) NULL,
	[step_owner] [varchar](225) NULL,
	[case_id] [varchar](225) NULL
)