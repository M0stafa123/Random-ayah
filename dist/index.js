"use strict";
let verse = document.querySelector(".verse");
let surah = document.querySelector(".name");
let refresh = document.querySelector(".refresh");
let main = document.querySelector("main");
let audi = document.querySelector("audio");
let number = document.querySelector(".number");
let range = document.querySelector("input");
let full = document.querySelector(".full");
let next = document.querySelector(".next");
let prev = document.querySelector(".prev");
let h2 = document.querySelector("h2");
let random = Math.floor(Math.random() * 6236);
let surahnum;
function reset() {
    audi.style.display = "block";
    verse.style.lineHeight = "auto";
}
fetch(`https://api.alquran.cloud/v1/ayah/${random}/ar.alafasy`)
    .then((res) => res.json())
    .then((data) => {
    reset();
    surahnum = data.data.surah.number;
    number.innerHTML = `${data.data.numberInSurah} الايه رقم`;
    verse.innerHTML = data.data.text;
    surah.innerHTML = data.data.surah.name;
    audi.src = data.data.audio;
});
refresh.addEventListener("click", function () {
    random = Math.floor(Math.random() * 6236);
    fetch(`https://api.alquran.cloud/v1/ayah/${random}/ar.alafasy`)
        .then((res) => res.json())
        .then((data) => {
        number.innerHTML = `${data.data.numberInSurah} الايه رقم`;
        surah.innerHTML = data.data.surah.name;
        verse.innerHTML = data.data.text;
        audi.src = data.data.audio;
        surahnum = data.data.surah.number;
    });
});
next.addEventListener("click", () => {
    reset();
    random += 1;
    fetch(`https://api.alquran.cloud/v1/ayah/${random}/ar.alafasy`)
        .then((res) => res.json())
        .then((data) => {
        number.innerHTML = `${data.data.numberInSurah} الايه رقم`;
        surah.innerHTML = data.data.surah.name;
        verse.innerHTML = data.data.text;
        audi.src = data.data.audio;
        surahnum = data.data.surah.number;
    });
});
prev.addEventListener("click", () => {
    reset();
    random -= 1;
    fetch(`https://api.alquran.cloud/v1/ayah/${random}/ar.alafasy`)
        .then((res) => res.json())
        .then((data) => {
        number.innerHTML = `${data.data.numberInSurah} الايه رقم`;
        surah.innerHTML = data.data.surah.name;
        verse.innerHTML = data.data.text;
        audi.src = data.data.audio;
        surahnum = data.data.surah.number;
    });
});
full.addEventListener("click", () => {
    fetch(`https://api.alquran.cloud/v1/surah/${surahnum}/ar.alafasy`)
        .then((res) => res.json())
        .then((data) => {
        h2.innerHTML = "";
        verse.innerHTML = "";
        number.innerHTML = ``;
        verse.style.lineHeight = "2";
        for (let i of data.data.ayahs) {
            console.log(i);
            verse.innerHTML += ` (${i.numberInSurah}) ` + i.text;
        }
        audi.style.display = "none";
    });
});
