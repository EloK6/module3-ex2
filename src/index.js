const tabArray = [
  "white",
  "purple",
  "pink",
  "blue",
  "grey",
  "turquoise",
  "darkcyan",
  "silver",
  "gold"
];

const btnColor = document.querySelector(".btn-color");
const blocColore = document.querySelector(".bloc1");
const couleur = document.querySelector(".color");

function randomNumber() {
  return Math.floor(Math.random() * tabArray.length);
}

btnColor.addEventListener("click", function () {
  let couleurChoisie = tabArray[randomNumber()];
  couleur.textContent = couleurChoisie;
  blocColore.style.backgroundColor = couleurChoisie;
});

/////Modal//////
document.querySelectorAll(".modal").forEach((div) => {
  div.onclick = show;
});

function show() {
  const content = this.getElementsByClassName("content")[0];
  if (content.style.display === "none") {
    content.style.display = "block";
  } else {
    content.style.display = "none";
  }
}