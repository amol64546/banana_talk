var input = document.querySelector(".english")
var output = document.querySelector(".banana")


function getTranslatedURL(text){
    return "https://api.mymemory.translated.net/get?q="+text+"!&langpair=en|te-IN";
}

function errorHandler(){
    console.log("Problem in server")
}

function clickHandler(){
    var inputText = input.value;
    fetch(getTranslatedURL(inputText))
    .then(response => response.json())
    .then(json => {
        output.innerText = json.responseData.translatedText
    })
    .catch(errorHandler)
}

btn.addEventListener("click",clickHandler)

