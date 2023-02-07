var formEL = document.querySelector (".pure-form");
var infoEL = document.querySelector ("#info");
var showtextEL =document.querySelector (".show");
var showinfoEL = document.querySelector (".show-info");

var subButton = function(event) {
    event.preventDefault();

    var infoInput = infoEL.value.trim();
    if(infoInput) {
        displayInfo(infoInput);
    } else {
        showinfoEL.innerHTML = "Nothing was Found"
    }

}

function displayInfo(recipes) {
    var url = "https://api.edamam.com/api/recipes/v2?type=public&q="+recipes+"&app_id=730b99e5&app_key=2eacc20905ac41a9a0d49163a5a68fec"
    console.log(url);
}


formEL.addEventListener('submit', subButton);
