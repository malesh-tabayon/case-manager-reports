# Simple Reporting Widget for Case Manager Tasks

# Important Note

This is simple reporting widget and not replacement for [IBM Case Analyzer](https://www.ibm.com/support/knowledgecenter/en/SSNW2F_5.2.1/com.ibm.p8.ce.admin.tasks.doc/bpfad043.htm) that is rich with features.

# Summery
this Widgets generate reports grid/graph, for every case contains the case step owner, action, start time, end time, duration...etc   

# Prerequisite

1-Create Table in DB to store Case Details Information   
 ->You can Find DB Structure in (/ Recources Folder)  
2- Create Three Procedure For Insert,Update and Select   
 ->You can Find Query Structure in (/ Recources Folder)  
3- add Datafield for Eeach Task in Your Case Type  


4- Add  Sub-Map in Workflow  for insert the Step information in DB that Execution before Each Step    


5-Add  Sub-Map in Workflow  for Update the Step information in DB that Execution after Each Step      


6-the Main workflow Map      


# Deployment
1-Deploy IBM Plug-in in IBM-Navigator      
->You can Find  IBM Plug-in Service in (/Plugin Service)     
2-Deploy Widget that Connects to Previous IBM Plug-in To display Data.     
->You can Find Widgets  in (/Widget)     

