var formEL = document.querySelector (".pure-form");
var infoEL = document.querySelector ("#info");
var showtextEL =document.querySelector (".show");
var showinfoEL = document.querySelector (".show-info");
var choicesEl = document.querySelector(".choices");
var favoriteEl = document.querySelector(".favorite-tab");
var favSelectEl = document.querySelector(".my-fav-text");


var subButton = function(event) {
    event.preventDefault();
    
    var infoInput = infoEL.value.trim();
    if(infoInput) {
        displayInfo(infoInput);
    } else {
        showinfoEL.innerHTML = "Nothing was Found";
    }
    
    favoriteEl.addEventListener('click', function() {
        localStorage.setItem("FavDrink", JSON.stringify(infoInput));
    });
}

favSelectEl.addEventListener('click', function(favInfo) {
    var myStorageData = JSON.parse(localStorage.getItem("FavDrink"));
        if(myStorageData){
            infoEL.value = myStorageData;
            subButton(favInfo);
        }
});


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
    var foodContainerHtml = "";
//You could add a line of code here to store calories and make it a whole number then represent it below
 for(var i = 0; i < txt.length; i++) {
    foodContainerHtml += `
    <div class="food-container food-${i}">
    <img src= "${txt[i].recipe.image}">
    <p>${txt[i].recipe.label}</p>
    <p>Calories: ${txt[i].recipe.calories} Kcal</p>
    `
    foodContainerHtml +=`
    <div class="ingredients-and-steps">
    <p class="center-text">Ingredients:<p>
    <ul>
    `

    //Referencing the index of the ingredients themself
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
    //Might need url from recipe's cuz that gives a link to the recipe
    console.log(foodContainerHtml);
    var html = foodContainerHtml;
    showinfoEL.innerHTML = html;
 }

}


formEL.addEventListener('submit', subButton);

