# case-manager-Analysis of workflow
# prerequisite

1-Create Table in DB to store Case Details Information 
 ->You can Find DB Structure in (/ Recources Folder)
2- Create Three Procedure For Insert,Update and Select 
 ->You can Find Query Structure in (/ Recources Folder)
3- add Datafield for Eeach Task in Your Case Type

![alt Datafield](https://github.com/tabayonit/case-manager-reports/blob/master/images/dataField.PNG)

4- Add  Sub-Map in Workflow  for insert the Step information in DB that Execution before Each Step

![alt Datafield](https://github.com/tabayonit/case-manager-reports/blob/master/images/insert%20sub%20map.PNG)

5-Add  Sub-Map in Workflow  for Update the Step information in DB that Execution after Each Step

![alt Datafield](https://github.com/tabayonit/case-manager-reports/blob/master/images/Update%20Sub%20Map%20PNG.PNG)

6-the Main workflow Map

![alt Datafield](https://github.com/tabayonit/case-manager-reports/blob/master/images/Main%20Workflow.PNG)

7-Create IBM Plug-in Select Data from DB
8-Deploy IBM Plug-in in IBM-Navigator 
9-Create Widget that Connect to Previous IBM Plug-in To display Data.
