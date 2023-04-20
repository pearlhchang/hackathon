document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector("button");
    const img = document.createElement("img");
    function generateMeme() {
        const imagesContainer = document.querySelector("div");
        const endpoint = "https://dog.ceo/api/breeds/image/random";
        fetch(endpoint)
        .then((data) => data.json())
        .then((data) => {
            img.src = data.message;
            imagesContainer.appendChild(img);
            imagesContainer.src = img.src;
            button.style.marginLeft = '133px';
            button.innerText = 'Next Pup';
            button.style.fontSize = '40px';
            button.style.padding = '10px 20px';
        });
    }
    button.addEventListener("click", generateMeme);
});


