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
    var url = "https://api.edamam.com/api/recipes/v2?type=public&q="+search+"&app_id=730b99e5&app_key=2eacc20905ac41a9a0d49163a5a68fec&dishType=Desserts&dishType=Sweets"
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
                console.log("General Data" + data);
            });
        }
    });
}


function displayTxt(txt) {
    var foodContainerHtml = "";
 for(var i = 0; i < txt.length; i++) {
    foodContainerHtml += `
    <div class="food-container food-${i}">
    <img src= "${txt[i].recipe.image}">
    <p>${txt[i].recipe.label}</p>
    <p>Description<p>
    <p>Description Text<p>
    <p>Calories: ${txt[i].recipe.calories}Kcal</p>
    `
    foodContainerHtml +=` 
    <div class="ingredients-and-steps">
    <p class="center-text">Ingredients:<p>
    <ul>
    `
    
    for(var j = 0; j < txt[i].recipe.ingredientLines.length; j++) {
        foodContainerHtml += `
        <li>${txt[i].recipe.ingredientLines[j]}</li>      
        `
    }

    
    foodContainerHtml += `
    </ul>
    </div>
    </div>
    `

    console.log(foodContainerHtml);
    var html = foodContainerHtml;
    showinfoEL.innerHTML = html;
 }
}

formEL.addEventListener('submit', subButton);
