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
    var drinksUrl = "https://api.edamam.com/api/recipes/v2?type=any&q=" + search + "&app_id=a29e6f3f&app_key=7047bda6c7dbcd72b85643ed79100572&dishType=Drinks";

    console.log(drinksUrl);
    fetch(drinksUrl) 
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

//Function to loop through the recipe array and display the individual stuff
function displayTxt(txt) {
    var html = "";
 for(var i = 0; i < txt.length; i++) {
    html += `
    <div class="food-container">
    <img src= "${txt[i].recipe.image}">
    <p>${txt[i].recipe.label}</p>
    <p>Description<p>
    <p>Description Text<p>
        <div class="food-side-information">
        <p>Meal Type: ${txt[i].recipe.mealType}</p>
        <p>Calories: ${txt[i].recipe.calories}Kcal</p>
        </div>
    </div> 
    <div id="ingredients-and-steps">
    <p>Ingredients:<p>
    </div>
    `
//Referencing the index of the ingredients themself
    for(var j = 0; j < txt[i].recipe.ingredientLines.length; j++) {
        html += `
        <div id="ingredients-and-steps">
        <ul>
        <li>${txt[i].recipe.ingredientLines[j]}</li>
        </ul> 
        </div>       
        `
    }

    html += `
    <div id="ingredients-and-steps">
    <p>${txt[i].recipe.source}</p>
    </div>
    `
    //Might need url from recipe's cuz that gives a link to the recipe
    console.log(html);
    console.log(txt[0].recipe.ingredientLines.values());
    showinfoEL.innerHTML = html;
 }
}


formEL.addEventListener('submit', subButton);
