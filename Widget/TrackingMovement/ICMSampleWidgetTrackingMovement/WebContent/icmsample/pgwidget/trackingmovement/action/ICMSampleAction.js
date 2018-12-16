define([
	"dojo/_base/declare",
	"icm/action/Action"
], function(declare, Action) {

	return declare("icmsample.pgwidget.trackingmovement.action.ICMSampleAction", [Action], {
		execute: function(){
			var msg = "[Action properties]\n";
			for(var key in this.propertiesValue){
				msg += key + ": " + this.propertiesValue[key] + "\n";
			}
			alert(msg);
		}
	});
});
