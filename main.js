document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector("button");
    const img = document.querySelector("img");
    function generateMeme() {
        const imagesContainer = document.querySelector("div");
        const endpoint = "https://dog.ceo/api/breeds/image/random";
        fetch(endpoint)
        .then((data) => data.json())
        .then((data) => {
            // const img = new Image();
            // console.log(data.message)
            img.src = data.message;
            imagesContainer.appendChild(img);
            imagesContainer.src = img.src;
        });
    }
    button.addEventListener("click", generateMeme);
});


// document.addEventListener("DOMContentLoaded", () => {
//     const button = document.querySelector("button");
//     // const img = document.querySelector("img");
//     function generateMeme() {
//         const imagesContainer = document.querySelector("div");
//         const endpoint = "https://dog.ceo/api/breeds/image/random";
//         fetch(endpoint)
//         .then((data) => data.json())
//         .then((data) => {
//             const img = new Image();
//             console.log(data.message)
//             img.src = data.message;
//             imagesContainer.appendChild(img);
//             // imagesContainer.src = img.src;
//         });
//     }
//     button.addEventListener("click", generateMeme);
// });
