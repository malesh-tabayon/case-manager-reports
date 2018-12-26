define([
	"dojo/_base/declare",
	"dojo/json",
	"icm/base/BasePageWidget",
	"icm/base/_BaseWidget",
	"dojo/text!./templates/StepTrackingGraph.html",
	"dijit/form/Button",
	"dojox/charting/Chart", 
	"dojox/charting/axis2d/Default",
    "dojox/charting/plot2d/Columns",
    "dijit/form/Button","ecm/model/Request"
], function(declare, json, BasePageWidget, _BaseWidget, template,button,Chart,Default,Columns,Request){
 
	return declare("steptrackinggraph.stgwidget.StepTrackingGraph", [_BaseWidget, BasePageWidget], {
        templateString: template,

           
            arrayOfYAxis: [],
            arrayOfXAxis : [],
            caseIdentifier : null,
        
       
         
		postCreate: function(){
            
            var _self = this;
            
            setTimeout(function() {
                _self.invokePlugin();
              }, 500);

   
        },

        invokePlugin:function(){
        

            var _self = this ;
            var requestParams = {};
            
            requestParams.caseId=_self.caseIdentifier;
            ecm.model.Request.invokePluginService("DBUpdateAndSelectPlugin", "DBSelectByIdGraphService ", {
                requestParams : requestParams, 
    				
                requestCompleteCallback : function(response) {
                
                    if (!response || response.length == 0) {
                     
                        return;
                    }

                   else{
                       
                   
                    var data_list = []
                    data_list.length = 0;
                      data_list = JSON.parse(response.result);
                     _self.arrayOfXAxis.length = 0;
                     _self.arrayOfYAxis.length = 0 ;
                          for(var i=0;i<data_list.length; i++){
                         _self.arrayOfXAxis.push({
                            value:   i+1,
                            text: data_list[i].stepName
                        });
                        _self.arrayOfYAxis.push({
                            y: data_list[i].time
                        });
                     
                   
                          }

                       _self.createChart();

                        }
                    },

            	});
        
        },


        createChart:function(){
            var _self = this ;
                var caseChart = new Chart("caseGraph",{
                title: "Work Item(Time)",
                titlePos: "bottom",
                titleGap: 25,
                titleFont: "normal normal normal 15pt Arial",
                titleFontColor: "orange"
              });
        
     
            caseChart.addPlot("default", { type: Columns, minBarSize: 10, maxBarSize: 20 });
              caseChart.addAxis("x",{labels: _self.arrayOfXAxis});
              caseChart.addAxis("y",{vertical: true, fixUpper: "major", includeZero: true});
              caseChart.addSeries("Visits",_self.arrayOfYAxis,{
              stroke: {
                  color: "blue",
                  width: 3
              },
              fill: "#123456"
          });
              
                 caseChart.render();          
         
        },
        
        receiveEventSendWorkItem:function(payload){
            var _self = this ;
    
     
        payload.workItemEditable.icmWorkItem.caseObject.retrieveCachedAttributes(
            function(caseObject) {
               
                var caseID = caseObject.caseIdentifier;
                _self.caseIdentifier = caseID;
              
             });
			      	
			      
      	        },
        receiveEventSendCaseInformation:function(payload){
            var _self = this ;
            payload.workItemEditable.icmWorkItem.caseObject.retrieveCachedAttributes(
                function(caseObject) {
                    var caseID = caseObject.caseIdentifier;
                    _self.caseIdentifier = caseID;
                 });
	      
        },

        
        
	});
});
