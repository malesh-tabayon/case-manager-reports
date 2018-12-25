define([
    	"dojo/_base/declare",
    	"dojo/json",
    	"icm/base/BasePageWidget",
    	"icm/base/_BaseWidget",
    	"dojo/text!./templates/StepTrackingReportWidget.html",
    	"dijit/form/Button","ecm/model/Request", "dojox/grid/DataGrid",
    	"dojo/data/ItemFileWriteStore"
    ], function(declare, json, BasePageWidget, _BaseWidget, template, request,DataGrid,ItemFileWriteStore){
    	return declare("steptrackingreport.pgwidget.StepTrackingReportWidget", [_BaseWidget, BasePageWidget], {
            templateString: template,
            caseIdentifier : null,
    		data : {
                identifier: 'id',
    			items : []
    		},

    		postCreate: function(){
    			var _self = this;

    			setTimeout(function() {
    				_self.getReportData();
    			}, 500);
    		},
    		getReportData : function() {
                var _self = this ;
                var requestParams = {};
                console.log("Biiiig Test ",_self.caseIdentifier)
                requestParams.caseId=_self.caseIdentifier;
    			// our Working Code
    			 console.log("Executed main require!");
                 console.log("enter function ");
    			
    	
    			ecm.model.Request.invokePluginService("DBUpdateAndSelectPlugin", "DBSelectByIdGridService", {
                    requestParams : requestParams, 
    				requestCompleteCallback : function(response) {
    					console.log("enter function33333 ");
    					if (!response || response.length == 0) {
    						console.log("nothing returned ");
    						return;
    					}
    				   else{
                           
    					console.log("response returned " , response);
                         var data_list = JSON.parse(response.result);
                              for(var i=0;i<data_list.length; i++){
                             _self.data.items.push( dojo.mixin({ id: i+1 },data_list[i]));
                              }
                           console.log("response returned test 40 " ,_self.data.items[1]);
                           _self.drawReportGrid();
                          
                           
    					return;
    				   }
    					
    			
    				},
    	
    			});

            },
            drawReportGrid:function(){
                var _self = this ;
                console.log("Enter here drawReportGrid ");
                var store = new dojo.data.ItemFileWriteStore({
                    data : _self.data
                });
 /* set up layout */
                 var layout = [[
                     {
                     name : "Num",
                     field : "id",
                     width : "10%",
                     height : "10%"
                 },{
                     name : "Step Name",
                     field : "stepName",
                     width : "11%",
                     height : "11%"
                 }, {
                     name : "Step Onwer",
                     field :"stepOwner",
                     width :  "11%",
                     height : "11%"
                 },{
                     
                     name : "Status",
                     field :"status",
                     width : "11%",
                     height : "11%"
                     
                 },{
                     name : "Recevied at",
                     field :"receviedAt",
                     width : "11%",
                     height : "11%"
                     
                 },{
                    name : "Completed at",
                    field :"completedAt",
                    width : "11%",
                    height : "11%"
                    
                },{
                    name : "Duration Munites",
                    field :"time",
                    width :"11%",
                    height : "11%"
                    
                },{
                     name : "Created By",
                     field :"creator",
                     width : "11%",
                     height : "11%"
                     
                 },{
                    name : "Completed By",
                    field :"completedBy",
                    width : "13%",
                    height :"13%"
                    
                }

                 ]];

         var grid = new dojox.grid.DataGrid({
         id: 'grid',
         store: store,
         structure: layout,
         rowSelector: '20px'},
             document.createElement('div'));

     /*append the new grid to the div*/
                dojo.byId("gridDiv").appendChild(grid.domNode);

     /*Call startup() to render the grid*/
                grid.startup();



            },
            receiveEventSendWorkItem:function(payload){
                var _self = this ;
            console.log("Enter receiveEventSendWorkItem" , payload);
            console.log("Enter workItemEditable" , payload.workItemEditable);
            payload.workItemEditable.icmWorkItem.caseObject.retrieveCachedAttributes(
                function(caseObject) {
                    console.log("DEBUG-retrieveCachedAttributes-ENTRY");
                    var caseID = caseObject.caseIdentifier;
                    _self.caseIdentifier = caseID;
                    console.log("caseIDIdentdier: "+_self.caseIdentifier);    
                 });
                          
                          _self.sendCaseIdentifier();
                      },
            receiveEventSendCaseInformation:function(payload){
                var _self = this ;
                console.log("Enter receiveEventSendCaseInformation" , payload);
                console.log("Enter workItemEditable" , payload.workItemEditable);
    
                payload.workItemEditable.icmWorkItem.caseObject.retrieveCachedAttributes(
                    function(caseObject) {
                        console.log("DEBUG-retrieveCachedAttributes-ENTRY");
                        var caseID = caseObject.caseIdentifier;
                        _self.caseIdentifier = caseID;
                        console.log("caseIDIdentdier: "+_self.caseIdentifier);    
                      
                     });
              
                  _self.sendCaseIdentifier();
            },
            sendCaseIdentifier:function(){
                console.log("Enter sendCaseIdentifier ");
                  var _self = this ;
    
                
            }
    	});
    });