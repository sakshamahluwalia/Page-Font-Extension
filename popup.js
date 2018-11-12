// This file sends a message to content.js file.
$(function() {
	var color = $('#fontColor').val();
	$('#fontColor').on("change paste keyup", function() {
		color = $(this).val();
	});
	$('#btnChange').click(function() {
		chrome.tabs.query({active:true, currentWindow:true}, function(tabs) {
			chrome.tabs.sendMessage(tabs[0].id, {todo: "changeColor", 
				clickedColor: color});
		});
	});
});