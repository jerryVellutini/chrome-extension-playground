/*
  JavaScript file for bg.html
*/
var cbargs = [];
var PreserveCallbackArguments = false;
function cb()
{
	if(PreserveCallbackArguments)
	{
		if(!cbargs.push)
			cbargs = [];
		cbargs.push(arguments)
	}
	else
		cbargs = arguments;
	console.log(arguments);
}

chrome.management.onInstalled.addListener(function()
{
	chrome.tabs.create( { url : "welcome.html" } );
});
