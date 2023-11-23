"use strict";
let verse = document.querySelector(".verse");
let surah = document.querySelector(".name");
let refresh = document.querySelector(".refresh");
let main = document.querySelector("main");
let audi = document.querySelector("audio");
let number = document.querySelector(".number");
// let range = document.querySelector("input") as HTMLInputElement;
// range.addEventListener("change", function () {
//   audi.currentTime = +range.value;
// });
fetch(
  `https://api.alquran.cloud/v1/ayah/${Math.floor(Math.random() * 6236)}/ar.alafasy`
)
  .then((res) => res.json())
  .then((data) => {
    number.innerHTML = `${data.data.numberInSurah} الايه رقم`;
    verse.innerHTML = data.data.text;
    surah.innerHTML = data.data.surah.name;
    audi.src = data.data.audio;
  });
refresh.addEventListener("click", function () {
  fetch(
    `http://api.alquran.cloud/v1/ayah/${Math.floor(Math.random() * 6236)}/ar.alafasy`
  )
    .then((res) => res.json())
    .then((data) => {
      number.innerHTML = `${data.data.numberInSurah} الايه رقم`;
      surah.innerHTML = data.data.surah.name;
      verse.innerHTML = data.data.text;
      audi.src = data.data.audio;
      //   audi.addEventListener("loadedmetadata", function () {
      //     range.max = `${Math.floor(audi.duration)}`;
      //     range.addEventListener("change", function () {
      //       audi.currentTime = +range.value;
      //     });
      //   });
    });
});
