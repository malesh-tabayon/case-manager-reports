var icmContextRoot = "/ICMSampleWidgetTrackingMovement";
var paths = {
	"icmsample": icmContextRoot + "/icmsample"
};
require({paths:paths});

require([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/aspect",
	"dojo/json",
	"ecm/model/Desktop",
	"ecm/model/admin/PluginConfig"
], function(declare, lang, aspect, json, Desktop, PluginConfig) {
	/**
	 * Use this function to add any global JavaScript methods your plug-in requires.
	 */

	// Example of accessing the plug-in configuration values
	aspect.after(Desktop, "onLogin", lang.hitch(this, function(response){
		var pluginConfig = PluginConfig.createPluginConfig("ICMSamplePlugin");
		pluginConfig.getPluginConfig(function(){
			var c = pluginConfig.getConfiguration();
			var config = c && json.parse(c);
			console.log("Plug-in Config=", config);
		});
	}), true);

});
