chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    if (request.todo == "showPageAction")
    {
        chrome.tabs.query({active:true,currentWindow: true}, function(tabs){
            chrome.pageAction.show(tabs[0].id);
        });
        chrome.tabs.executeScript({
        file: 'content.js'
        });
    }
});

var j = document.createElement('script');
j.src = chrome.extension.getURL('jquery-3.3.1.min.js');
(document.head || document.documentElement).appendChild(j);
