package com.ibm.icm.sample.plugin.actions;

import java.io.IOException;
import java.util.Locale;

import com.ibm.ecm.extension.PluginAction;
import com.ibm.json.java.JSONObject;

public class ICMSampleAction extends PluginAction {

	@Override
	public String getId() {
		return "custom.ICMSampleAction";
	}

	@Override
	public String getName(Locale locale) {
		return "ICM Sample Action";
	}

	@Override
	public String getIcon() {
		return "";
	}

	@Override
	public String getPrivilege() {
		return "";
	}

	@Override
	public String getServerTypes() {
		return "p8,cm";
	}

	@Override
	public String getActionFunction() {
		return "";
	}

	@Override
	public boolean isMultiDoc() {
		return false;
	}

	@Override
	public boolean isGlobal() {
		return false;
	}

	@Override
	public String getActionModelClass() {
		return "icmsample.pgwidget.trackingmovement.action.ICMSampleAction";
	}

	@Override
	public JSONObject getAdditionalConfiguration(Locale locale) {
		String jsonString = 
			"{" +
			"\"ICM_ACTION_COMPATIBLE\": true," +
			"\"context\": null," +
			"\"name\": \"ICM Sample Action\"," +
			"\"description\": \"An action to do something\"," +
			"\"properties\": [" +
				"{" +
					"\"id\": \"label\"," +
					"\"title\": \"label\"," +
					"\"defaultValue\": \"\"," +
					"\"type\": \"string\"," +
					"\"isLocalized\": false" +
				"}," +
				"{" +
					"\"id\": \"message\"," +
					"\"title\": \"message\"," +
					"\"defaultValue\": \"\"," +
					"\"type\": \"string\"," +
					"\"isLocalized\": false" +
				"}" +
			"]}";
		try {
			return JSONObject.parse(jsonString);
		} catch (IOException e) {
			e.printStackTrace();
		}
		return null;
	}
}
