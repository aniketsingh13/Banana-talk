var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/minion.json";




function getTranslationURL(text) {
    return serverURL  + "?" + "text=" + text ;
}

function errorHandler(error) {
    alert("something wrong with the server!,plese try after sometimes");
}

function clickHandler() {
    var inputText = txtInput.Value;
    fetch (getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;
        })
        .catch(errorHandler)
}

btnTranslate.addEventListener("click", clickHandler);