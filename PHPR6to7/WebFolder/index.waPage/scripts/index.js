
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var documentEvent = {};	// @document
	var Convert = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		var testLines = ds.ListHTML.loadTestdata();
		$$('v6Field').setValue(testLines);
		return;
	};// @lock

	Convert.click = function Convert_click (event)// @startlock
	{// @endlock
		var v6lines  = $$('v6Field').getValue();
		var v7lines = ds.ListHTML.convertHTML(v6lines);
		$$('v7Field').setValue(v7lines);
		return;
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
	WAF.addListener("Convert", "click", Convert.click, "WAF");
// @endregion
};// @endlock
