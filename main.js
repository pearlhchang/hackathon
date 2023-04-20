document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector("button");
    function generateMeme() {
        const imagesContainer = document.querySelector("div");
        const endpoint = "https://dog.ceo/api/breeds/image/random";
        fetch(endpoint)
        .then((data) => data.json())
        .then((data) => {
            // const memes = data.data.memes;
            // //iterating through all images on page
            // const meme = memes[Math.floor(Math.random() * memes.length)];
            // // select a random meme from the meme array
            const img = new Image();
            console.log(data.message)
            img.src = data.message;
            imagesContainer.appendChild(img);
            //setting to a new picture
        });
     
    }
    
    button.addEventListener("click", generateMeme);

});


