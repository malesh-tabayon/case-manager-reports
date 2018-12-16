define([
	"dojo/_base/declare",
	"dojo/json",
	"icm/base/BasePageWidget",
	"icm/base/_BaseWidget",
	"dojo/text!./templates/ICMSampleWidgetTrackingMovement.html",
	"dijit/form/Button"
], function(declare, json, BasePageWidget, _BaseWidget, template){
	return declare("icmsample.pgwidget.trackingmovement.ICMSampleWidgetTrackingMovement", [_BaseWidget, BasePageWidget], {
		templateString: template,

		postCreate: function(){
		}
	});
});
