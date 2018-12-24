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
        
       
         
		postCreate: function(){
            
            var _self = this;
            
            setTimeout(function() {
                _self.invokePlugin();
              }, 500);

   
        },

        invokePlugin:function(){

            var _self = this ;
            var requestParams = {};
            requestParams.caseId="06FB7A9D353B6A4A99AF1840EF7168BE";
            ecm.model.Request.invokePluginService("DBUpdateAndSelectPlugin", "DBSelectByIdGraphService ", {
                requestParams : requestParams, 
    				
                requestCompleteCallback : function(response) {
                    console.log("enter function33333 ");
                    if (!response || response.length == 0) {
                        console.log("nothing returned ");
                        return;
                    }

                   else{
                       
                    console.log("response returned" , response);
                     var data_list = JSON.parse(response.result);
                          for(var i=0;i<data_list.length; i++){
                         _self.arrayOfXAxis.push({
                            value:   i+1,
                            text: data_list[i].stepName
                        });
                        _self.arrayOfYAxis.push({
                            y: i+1
                        });
                        console.log("response returned test 120 " ,_self.arrayOfXAxis[i]);
                       
                          }

                       _self.createChart();
                       _self.receiveEventPageOpened();
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
        
              var labels = [
           
            {value: 1,text: "Mohamed"},
            {value: 2,text: "Ali"},
            {value: 3,text: "Amen"},
            {value: 4,text: "farid"}, {value: 5,text: "Ahmed"}
            // and so on
               ];
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
        
        receiveEventPageOpened:function(){
        console.log("Enter receiveEventPageOpened")
        	
        }
        
        
	});
});
