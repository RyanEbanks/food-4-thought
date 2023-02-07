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

function displayInfo(search) {
    var url = "https://api.edamam.com/api/recipes/v2?type=public&q="+search+"&app_id=730b99e5&app_key=2eacc20905ac41a9a0d49163a5a68fec&dishType=Desserts"
    console.log(url);
    fetch(url) 
    .then(function(response){
        if(response.ok) {
            response.json().then(function(data) {
                console.log(data.hits);
                if(data.url === 0) {
                    showinfoEL.innerHTML = "Nothing was Found";
                    return;
                }
                displayTxt(data.hits);
                console.log(data.hits);
            });
        }
    });
}

function displayTxt(txt) {
    var html = "";
 for(var i = 0; i < txt.length; i++) {
    html += `
        <p>${txt[i].recipe.calories}</p>
        <p>${txt[i].recipe.dishType}</p>
        <img src= "${txt[i].recipe.image}">
        <p>${txt[i].recipe.ingredientLines}</p>
        <p>${txt[i].recipe.label}</p>
        <p>${txt[i].recipe.mealType}</p>
        <p>${txt[i].recipe.source}</p>
        
    `
    console.log(html);

    showinfoEL.innerHTML = html;
 }
}

formEL.addEventListener('submit', subButton);
