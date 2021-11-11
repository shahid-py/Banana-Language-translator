var btnTranslate = document.getElementById('btn-translate');

var inputText = document.getElementById('input-text');
var translatedText = document.getElementById('translated-text');

var minionURL = "https://api.funtranslations.com/translate/minion.json";


// construct URL

function addTextParameterToURL(textParameter) {
    var endcodedURI = encodeURIComponent(textParameter);
    return `${minionURL}?text=${endcodedURI}`;
  }
  
 