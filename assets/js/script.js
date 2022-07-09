const container = document.querySelector(".container");
const palette = document.getElementsByClassName("color");
const clearBtn = document.querySelector("#clear");

let pixels = document.getElementsByClassName("pixels");
let color = undefined;

function createFrames() {
  for (let i = 1; i <= 25; i += 1) {
    let element = document.createElement("article");
    element.className = "pixels";
    container.appendChild(element);
  }
}

function paintAll() {
  container.style.backgroundColor = "transparent";
}

function clearAll() {
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = "transparent";
  }
}

function paintFrame(e) {
  e.target.style.backgroundColor = color;
}

function createPalette() {
  palette[0].style.backgroundColor = "black";
  palette[1].style.backgroundColor = "red";
  palette[2].style.backgroundColor = "blue";
  palette[3].style.backgroundColor = "green";
}

function getColor() {
  for (let i = 0; i < palette.length; i += 1) {
    palette[i].addEventListener("click", () => {
      color = window.getComputedStyle(palette[i]).backgroundColor;
      console.log(color);
    });
  }
}

container.addEventListener("click", paintFrame);
clearBtn.addEventListener("click", clearAll);

window.onload = function () {
  createFrames();
  createPalette();
  getColor();
  paintAll();
};