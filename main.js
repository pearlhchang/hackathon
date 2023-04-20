document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector("button");
    const img = document.createElement("img");
    const header = document.querySelector("h1");
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
            header.style.display = 'none';
            

        });
    }
    button.addEventListener("click", generateMeme);
});


