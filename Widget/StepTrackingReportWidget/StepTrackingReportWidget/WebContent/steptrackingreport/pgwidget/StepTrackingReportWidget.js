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
    			// our Working Code
    			 console.log("Executed main require!");
                 console.log("enter function ");
    			
    	
    			ecm.model.Request.invokePluginService("DBUpdateAndSelectPlugin", "DBSelectService", {
    				
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
                           console.log("response returned test 40 " ,_self.data.items[40]);
                           	function getRowIcon(item) {  
                            var src = "/ICMClient/icm/css/images/idl/attachment_24.svg";
                            return '<img width="14" height="14" src="' + src + '" /> ';

                                }
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
                                width : "18%",
                                height : "18%"
                            }, {
                                name : "Step Onwer",
                                field :"stepOwner",
                                width :  "18%",
                                height : "18%"
                            },{
                                
                                name : "Status",
                                field :"status",
                                width : " 18%",
                                height : "18%"
                                
                            },{
                                name : "Recevied At",
                                field :"receviedAt",
                                width : "18%",
                                height : "18%"
                                
                            },{
                                name : "Created By",
                                field :"Who",
                                width : "18%",
                                height : "18%"
                                
                            }

                            ]];
//                           	if(_self.grid){
//    				    _self.grid.destroyRecursive();
//                                }
//                           _self.grid = new dojox.grid.DataGrid ({
//                            id : 'grid',
//                            store : store,
//                            structure : layout,
//                            rowSelector : '20x'
//                            });
//                           
//                               setTimeout(function() {
//                                   console.log("enter here")
//                                   _self.grid.startup()
//                               }, 300);
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

                           
    					return;
    				   }
    					
    			
    				},
    	
    			});

    		}
    	});
    });



















