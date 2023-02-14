var heroEl = document.querySelector(".hero-banner");


// $(function () {
//     const options = {
//         method: 'GET',
//         headers: {
//             Authorization: 'mBN5jMAFKbk9DZcQryCol1NlVy04Aaw80lwLA2VgGmd8drtD1k2WwDDA',
//             'X-RapidAPI-Key': '4f146f7aeemsh38dfcea59f162a7p1eb618jsnfd9eca2623a9',
//             'X-RapidAPI-Host': 'PexelsdimasV1.p.rapidapi.com'
//         }
//     };
    
//     fetch('https://pexelsdimasv1.p.rapidapi.com/v1/search?query=food%20wallpaper&locale=en-US&per_page=5&page=1', options)
//         .then(response => response.json())
//         .then(response => generateImages(response.photos))
//         // .then(response => console.log(response.photos))
//         .catch(err => console.error(err));

// });

// function generateImages(image){
//     var tag = "";

//     // var imageArr = [image[0].src.landscape, image[1].src.landscape, image[2].src.landscape, image[3].src.landscape, image[4].src.landscape];
//     var imageArr = [image[0].src.medium, image[1].src.medium, image[2].src.medium, image[3].src.medium, image[4].src.medium];
//     // var imageArr = [image[0].src.large2x, image[1].src.large2x, image[2].src.large2x, image[3].src.large2x, image[4].src.large2x];

//     tag += `
//         <img src="${imageArr[Math.floor(Math.random() * imageArr.length)] + 1}" alt="Image of food" class="banner">
//     `

//     console.log(tag);
//     heroEl.innerHTML = tag;
// }

const startButton =document.getElementById('submit')

startButton.addEventListener('click', startGame)

function startQuiz(){
    console.log('Started')
    startButton.classlist.add('hide')
    questionContainterElement.classlist.remove('hide')
    setNextQuestion

}