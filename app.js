let button = document.getElementById("button");
let image = document.getElementById("image");
let pokeNumber = document.getElementById("number");
let pokeName = document.getElementById("name");


const changePokemon = async () => {
    let randomNumber = Math.ceil(Math.random() * 150) + 1;


    let requestString = `https://pokeapi.co/api/v2/pokemon/${randomNumber}`;

    let data = await fetch(requestString);
    console.log(data);

    let response = await data.json();
    console.log(response);

    image.scr = response.sprites.front_default;
};

button.addEventListener("click", changePokemon);