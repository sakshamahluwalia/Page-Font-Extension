//sending a mssg to eventpage from content
chrome.runtime.sendMessage({todo: "showPageAction"});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	if (request.todo = "changeColor") {
		var addColor = '#' + request.clickedColor;
		$('.gc-container').css('color', addColor);
	}
})