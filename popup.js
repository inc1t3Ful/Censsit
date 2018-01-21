$(function(){
	var word;
	$('#bad_word').on('input', function(){
		word = $(this).val()
	});
	$('#btnCensor').click(function(){
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
			chrome.tabs.sendMessage(tabs[0].id, {todo: "censorBadWord", clickedWord: word})
		});
	});
})