'use strict';

import { pokemons } from "./pokemons.js";

let input = document.querySelector("input");
let main = document.querySelector("section");
let btn = document.querySelector("#btn");
let alf = document.querySelector("#alf");
let type = document.querySelector("#type");

function CreatePikachu(pokemon) {
    let div = document.createElement("div");
    let name = document.createElement("h2");
    let img = document.createElement("img");
    let typediv = document.createElement("div");
    let type = document.createElement("h3");
    let candy = document.createElement("p");
    let kg = document.createElement("p");
    let created = document.createElement("p");

    name.innerHTML = pokemon.name;
    img.src = pokemon.img;
    type.innerHTML = pokemon.type;
    candy.innerHTML = pokemon.candy_count || "No candy count";
    kg.innerHTML = `${pokemon.weight}`;
    created.innerHTML = `Weaknesses: ${pokemon.weaknesses.join(", ")}`;

    typediv.appendChild(type);

    div.classList.add('card');

    div.appendChild(name);
    div.appendChild(img);
    div.appendChild(typediv);
    div.appendChild(candy);
    div.appendChild(kg);
    div.appendChild(created);

    main.appendChild(div);
}

pokemons.forEach(Item => {
    CreatePikachu(Item);
});

btn.addEventListener("click", () => {
    main.innerHTML = '';

    let filtered = pokemons.filter((Item) =>
        Item.name.toLowerCase().trim().includes(input.value.trim().toLowerCase())
    );

    filtered.forEach(element => {
        CreatePikachu(element)
    });




});

alf.addEventListener("input", () => {
    if (alf.value == "all") {
        main.innerHTML = '';
        pokemons.forEach(Item => {
            CreatePikachu(Item);
        });
    } else if (alf.value == "az") {
        pokemons.sort((a, b) => a?.name.localeCompare(b?.name));
        pokemons.forEach(Item => {
            CreatePikachu(Item);
        });
    } else if (alf.value == 'ZA') {
        pokemons.sort((a, b) => b?.name.localeCompare(a?.name));
        pokemons.forEach(Item => {
            CreatePikachu(Item);
        });
    }
});

btn.addEventListener("click", () => {
    main.innerHTML = ""; // Очистка перед новой отрисовкой

    if (type.value.toLowerCase().trim() !== "all") {
        let fil = pokemons.filter((item) =>
            item.type.some(t => t.toLowerCase().trim() === type.value.toLowerCase().trim())
        );

        fil.forEach(item => {
            CreatePikachu(item);
        });
    } else {
        pokemons.forEach(item => {
            CreatePikachu(item);
        });
    }
});

