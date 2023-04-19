
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
// 		'X-RapidAPI-Host': 'ronreiter-meme-generator.p.rapidapi.com'
// 	}
// };

// fetch('https://ronreiter-meme-generator.p.rapidapi.com/meme?top=Top%20Text&bottom=Bottom%20Text&meme=Condescending-Wonka&font_size=50&font=Impact', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
//     .catch(err => console.error(err));
    
const button = document.querySelectorAll('#button');

function replaceAllimages() {
    const img = document.querySelectorAll('img'); 
    img.forEach(image => {
        fetch('https://api.imgflip.com/get_memes')
            .then(data => data.json())
            .then(data => {
                console.log(data); 
                image.src = data.url; //are all the images gonna be the same meme 
            })
    });
}

replaceAllimages();


// button.addEventListener('click', e => {
//     replaceAllimages(); 
// })