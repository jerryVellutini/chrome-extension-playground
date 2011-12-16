/*
  JavaScript file for bg.html
*/
function cb()
{
	console.log(arguments);
}

chrome.management.onInstalled.addListener(function()
{
	chrome.tabs.create( { url : "welcome.html" } );
});
