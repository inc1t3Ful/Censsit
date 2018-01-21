chrome.runtime.sendMessage({todo: "showPageAction"});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
	if (request.todo == "censorBadWord"){
		var word = request.clickedWord;
		$('.commentarea .sitetable .usertext p').text('bad word');
	}
})