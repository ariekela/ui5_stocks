/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"nssam./ui5_stocks/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
