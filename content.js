chrome.runtime.sendMessage({todo: "showPageAction"});
console.log("content.js");

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
 	if (request.todo == "censorBadWord"){
 		var word = request.clickedWord;
 		$('.commentarea .sitetable .usertext p').text('bad word');
 	}
 })

function censor(){
    var badWords = ['fuck'];
    var x = document.getElementsByClassName("md");

    for (var i = 0; i<x.length; i++) {
        var badword = false;
        //x[i].style.backgroundColor = "black";
        var comment = x[i].innerHTML.toLowerCase().split(" ");
        for (var j = 0; j< comment.length; j++) {
             
            for (var k = 0; k<badWords.length; k++){
                if (comment[j].includes(badWords[k])){
                    badword = true;
                    break;
                }   
            }
        }
        if (badword){
            //x[i].style.backgroundColor = "black";
            //x.removeChild(x[i]);
            x[i].innerHTML = "This comment contains offensive language and has been filtered.";
        }
    }
    console.log("what");
}
censor();