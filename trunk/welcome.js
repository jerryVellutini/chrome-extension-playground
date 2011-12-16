/*
  JavaScript file for welcome.html
*/
chrome.management.get(chrome.i18n.getMessage("@@extension_id"), function(info)
{
	function addInfo(name, value, extra)
	{
		var extinfo = document.getElementById("extinfo");
		var tr = document.createElement("tr");
		var td_name = document.createElement("td");
		var td_value = document.createElement("td");
		td_name.appendChild(document.createTextNode(name));
		if(extra && extra.type == "link")
		{
			var a = document.createElement("a");
			a.appendChild(document.createTextNode(value));
			a.href = value;
			td_value.appendChild(a);
		}
		else
			td_value.appendChild(document.createTextNode(value));
		tr.appendChild(td_name);
		tr.appendChild(td_value);
		extinfo.appendChild(tr);
	}
	
	addInfo("ID", info.id);
	addInfo("Name", info.name);
	addInfo("Description", info.description);
	addInfo("Version", info.version);
	addInfo("Can be disabled or uninstalled?", info.mayDisable.toString());
	addInfo("Enabled", info.enabled.toString());
	if(info.homepageUrl)
		addInfo("Homepage URL", info.homepageUrl, {type : "link"} );
	if(info.updateUrl)
		addInfo("Update URL", info.updateUrl, {type : "link"} );
	
});
