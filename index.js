const music = document.querySelector("#music");
console.log(music);

window.onload = function () {
  document
    .querySelector(".card")
    .addEventListener("transitionstart", () => music.play());
};
