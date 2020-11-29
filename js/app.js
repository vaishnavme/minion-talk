// inital requirement
// get input
const inputText = document.querySelector("#text-input"); 
// show output
const outputPlace = document.querySelector("#text-output");
// btn to convert
const translateBtn = document.querySelector("#btn-translate");

translateBtn.addEventListener("click", translateButtonHandler);

var url = "https://api.funtranslations.com/translate/minion.json"

function translateButtonHandler(event) {
    inputInfo = inputText.value;
    var urlCall = buildURL(inputInfo);
    console.log(urlCall);
    fetch(urlCall)
        .then(respose => respose.json())
        .then(json => {
            outputPlace.innerText = json.contents.translated;
        })
        .catch(() => alert("Some Error has Occured!"));
}

function buildURL(inputData) {
    return `${url}?text=${inputData}`;
}