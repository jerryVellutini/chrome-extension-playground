/*
  JavaScript file for tts.html
*/
var crx = {tts : {}};
crx.tts.speak = (function()
{
	chrome.tts.speak(document.getElementById("test_speak_utterance").value, 
	{
		enqueue : document.getElementById("test_speak_options_enqueue").checked, 
		voiceName : document.getElementById("test_speak_options_voiceName").value
	});
});

crx.tts.stop = (function()
{
	chrome.tts.stop();
});

crx.tts.init = (function()
{
	chrome.tts.getVoices(function(voices)
	{
		for(var i = 0; i < voices.length; ++i)
		{
			var option = document.createElement("option");
			option.text = option.value = voices[i].voiceName;
			document.getElementById("test_speak_options_voiceName").add(option);
		}
	});
	
	document.getElementById("test_speak_speak").onclick = crx.tts.speak;
	document.getElementById("test_speak_stop").onclick = crx.tts.stop;
});

function updateSpeakStatus()
{
	chrome.tts.isSpeaking(function(speaking)
	{
		document.getElementById("speakStatusIndicator").innerText = speaking ? "Speaking..." : "Idle";
	});
	
	window.setTimeout(updateSpeakStatus, 500);
}
updateSpeakStatus();
crx.tts.init();
