chrome.runtime.sendMessage({todo: "showPageAction"});
console.log("content.js");

function censor(){
    var badWords = ['fuck', 'hell', 'shit', 'anus','ass','credit'];
    var x = document.getElementsByClassName("md");
    var i;
    for (i = 0; i<x.length; i++) {
        var badword = false;
        //x[i].style.backgroundColor = "black";
        var comment = x[i].innerHTML.split(" ");
        for (var j = 0; j< comment.length; j++) {
             console.log(comment[j]);
            for (var k = 0; k<badWords.length; k++){
                if (comment[j].includes(badWords[k])){
                    badword = true;
                    break;
                }   
            }
        }
        if (badword){
            x[i].style.backgroundColor = "black";
            //x[i].removeAttribute;
        }
    }
    console.log("what");
}
censor();