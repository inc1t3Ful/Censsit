chrome.runtime.sendMessage({todo: "showPageAction"});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    if (request.todo == "censorBadWord"){
        var word = request.clickedWord;
        $('.commentarea .sitetable .usertext p').text(word);
    }
 });

var parseDoc =function(){
    var badword = false;
    var blockComment = true;
    var x = document.getElementsByClassName("md");

    for (var i = 0; i<x.length; i++) {
        var cleanText = x[i].innerText.replace(/(\r\n|\n|\r)/gm, "")
        console.log(cleanText);
        var comment = x[i].innerText.toLowerCase().replace(/(\r\n|\n|\r)/gm, "").split(/[ ,.:?-]+/);
        //console.log(comment);
        badword = censor(comment);
        if (badword){
            //blockComment = main(cleanText);
            //console.log(blockComment);
            //if (blockComment) {

                x[i].innerHTML = "This comment contains offensive language and has been filtered.";
                x[i].style.backgroundColor = "red";
            //}
            //else x[i].style.backgroundColor = "black";

        }
    }
}

function censor(comment) {
    var badword = false;
        var badWords = ["4r5e","50 yard cunt punt","5h1t","5hit","a_s_s","a2m","a55","adult","amateur","anal","anal impaler","anal leakage","anilingus","anus","ar5e","arrse","arse","arsehole","ass","ass fuck","asses","assfucker","ass-fucker","assfukka","asshole","asshole","assholes","assmucus","assmunch","asswhole","autoerotic","b!tch","b00bs","b17ch","b1tch","ballbag","ballsack","balls","bang (one's) box","bangbros","bareback","bastard","beastial","beastiality","beef curtain","bellend","bestial","bestiality","bi+ch","biatch","bimbos","birdlock","bitch","bitch tit","bitcher","bitchers","bitches","bitchin","bitching","biatch","bloody","blow job","blow me","blow mud","blowjob","blowjobs","blue waffle","blumpkin","boiolas","bollock","bollok","boner","boob","boobs","booobs","boooobs","booooobs","booooooobs","breasts","buceta","bugger","bum","bunny fucker","bust a load","busty","butt","buttplug","butt fuck","butthole","buttmuch","buttplug","c0ck","c0cksucker","carpet muncher","carpetmuncher","cawk","chink","choade","chota bags","cipa","cl1t","clit","clit licker","clitoris","clits","clitty litter","clusterfuck","cnut","cock","cock pocket","cock snot","cockface","cockhead","cockmunch","cockmuncher","cocks","cocksuck ","cocksucked ","cocksucker","cock-sucker","cocksucking","cocksucks ","cocksuka","cocksukka","cok","cokmuncher","coksucka","coon","cop some wood","cornhole","corp whore","cox","cum","cum chugger","cum dumpster","cum freak","cum guzzler","cumdump","cummer","cumming","cums","cumshot","cunilingus","cunillingus","cunnilingus","cunt","cunt hair","cuntbag","cuntlick ","cuntlicker ","cuntlicking ","cunts","cuntsicle","cunt-struck","cut rope","cyalis","cyberfuc","cyberfuck ","cyberfucked ","cyberfucker","cyberfuckers","cyberfucking ","d1ck","damn","dick","dick hole","dick shy","dickhead","dildo","dildos","dink","dinks","dirsa","dirty Sanchez","dlck","dog-fucker","doggie style","doggiestyle","doggin","dogging","donkeyribber","doosh","duche","dyke","eat a dick","eat hair pie","ejaculate","ejaculated","ejaculates ","ejaculating ","ejaculatings","ejaculation","ejakulate","erotic","f u c k","f u c k e r","f_u_c_k","f4nny","facial","fag","fagging","faggitt","faggot","faggs","fagot","fagots","fags","fanny","fannyflaps","fannyfucker","fanyy","fatass","fcuk","fcuker","fcuking","feck","fecker","felching","fellate","fellatio","fingerfuck ","fingerfucked ","fingerfucker ","fingerfuckers","fingerfucking ","fingerfucks ","fist fuck","fistfuck","fistfucked ","fistfucker ","fistfuckers ","fistfucking ","fistfuckings ","fistfucks ","flange","flog the log","fook","fooker","fuck hole","fuck puppet","fuck trophy","fuck yo mama","fuck","f u c k","fucka","fuck-ass","fuck-bitch","fucked","fucker","fuckers","fuckhead","fuckheads","fuckin","fucking","fuckings","fuckingshitmotherfucker","fuckme ","fuckmeat","fucks","fucktoy","fuckwhit","fuckwit","fudge packer","fudgepacker","fuk","fuker","fukker","fukkin","fuks","fukwhit","fukwit","fux","fux0r","gangbang","gangbang","gang-bang","gangbanged ","gangbangs ","gassy ass","gaylord","gaysex","goatse","god","god damn","god-dam","goddamn","goddamned","god-damned","ham flap","hardcoresex ","hell","heshe","hoar","hoare","hoer","homo","homoerotic","hore","horniest","horny","hotsex","how to kill","how to murdep","jackoff","jack-off ","jap","jerk","jerk-off ","jism","jiz ","jizm ","jizz","kawk","kinky Jesus","knob","knob end","knobead","knobed","knobend","knobend","knobhead","knobjocky","knobjokey","kock","kondum","kondums","kum","kummer","kumming","kums","kunilingus","kwif","labia","l3i+ch","l3itch","labia","LEN","lmao","lmfao","lust","lusting","m0f0","m0fo","m45terbate","ma5terb8","ma5terbate","mafugly","masochist","masterb8","masterbat*","masterbat3","masterbate","master-bate","masterbation","masterbations","masturbate","mof0","mofo","mo-fo","mothafuck","mothafucka","mothafuckas","mothafuckaz","mothafucked ","mothafucker","mothafuckers","mothafuckin","mothafucking ","mothafuckings","mothafucks","mother fucker","mother fucker","motherfuck","motherfucked","motherfucker","motherfuckers","motherfuckin","motherfucking","motherfuckings","motherfuckka","motherfucks","muff","muff puff","mutha","muthafecker","muthafuckker","muther","mutherfucker","n1gga","n1gger","nazi","need the dick","nigg3r","nigg4h","nigga","niggah","niggas","niggaz","nigger","niggers ","nob","nob jokey","nobhead","nobjocky","nobjokey","numbnuts","nut butter","nutsack","omg","orgasim ","orgasims ","orgasm","orgasms ","p0rn","pawn","pecker","penis","penisfucker","phonesex","phuck","phuk","phuked","phuking","phukked","phukking","phuks","phuq","pigfucker","pimpis","piss","pissed","pisser","pissers","pisses ","pissflaps","pissin ","pissing","pissoff ","poop","porn","porno","pornography","pornos","prick","pricks ","pron","pube","pusse","pussi","pussies","pussy","pussy fart","pussy palace","pussys ","queaf","queer","rectum","retard","rimjaw","rimming","s hit","s.o.b.","s_h_i_t","sadism","sadist","sandbar","sausage queen","schlong","screwing","scroat","scrote","scrotum","semen","sex","sh!+","sh!t","sh1t","shag","shagger","shaggin","shagging","shemale","s hit","shi+","shit","sh1t","shit fucker","shitdick","shite","shited","shitey","shitfuck","shitfull","shithead","shiting","shitings","shits","shitted","shitter","shitters ","shitting","shittings","shitty ","skank","slope","slut","slut bucket","sluts","smegma","smut","snatch","son-of-a-bitch","spac","spunk","t1tt1e5","t1tties","teets","teez","testical","testicle","tit","tit wank","titfuck","tits","titt","tittie5","tittiefucker","titties","tittyfuck","tittywank","titwank","tosser","turd","tw4t","twat","twathead","twatty","twunt","twunter","v14gra","v1gra","vagina","viagra","vulva","w00se","wang","wank","wanker","wanky","whoar","whore","willies","willy","wtf","xrated","xxx"];

    for (var j = 0; j< comment.length; j++) {
        for (var k = 0; k<badWords.length; k++){
            if (comment[j]==badWords[k]){
                badword = true;
                break;
            }
        }
    }
    return badword;
}
//parseDoc();

var API_KEY = 'api-key';

function refresh(f) {
  if( /in/.test(document.readyState) ) {
      // in condition || (typeof Gmail === undefined)
    setTimeout('refresh(' + f + ')', 10);
  } else {
    f();
  }
}

var warned = {};

function main(comment){
    var confirmBlock;
    var nlpreq = new XMLHttpRequest();
    nlpreq.open("POST", "https://language.googleapis.com/v1beta1/documents:analyzeSentiment?key=" + API_KEY, true);

    nlpreq.setRequestHeader("Content-type", "application/json");

    var request = {
      document: {
        type: "PLAIN_TEXT",
        content: comment
      },
      encodingType: "UTF8"
    };
    nlpreq.send(JSON.stringify(request));

    nlpreq.onreadystatechange = function() {
      if(nlpreq.readyState == 4 && nlpreq.status == 200) {

        response = JSON.parse(nlpreq.responseText);
          //console.log(response);
        sentiment = parseFloat(response['documentSentiment']['score']);
        magnitude = parseFloat(response['documentSentiment']['magnitude']);
          console.log("sentiment: "+sentiment);
          console.log("magnitude: "+magnitude);
        if (sentiment < -0.5 && magnitude > 0.6) {
            //alert("Careful! These comments are pretty negative.");
            confirmBlock=true;
            console.log(confirmBlock);
          }
        }
      }
    return confirmBlock;
}

//parseDoc();
refresh(parseDoc);
