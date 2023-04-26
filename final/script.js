const barbellContainer = document.getElementsByClassName("barbell-container")[0];
const barbellText = document.getElementsByClassName("barbell-text")[0]
const cableContainer = document.getElementsByClassName("cable-container")[0];
const cableText = document.getElementsByClassName("cable-text")[0]
const dumbellContainer = document.getElementsByClassName("dumbell-container")[0];
const dumbellText = document.getElementsByClassName("dumbell-text")[0]
const bwContainer = document.getElementsByClassName("bodyweight-container")[0];
const bwText = document.getElementsByClassName("bw-text")[0];
const leftShoulder = document.getElementById('left-shoulder');
const rightShoulder = document.getElementById('right-shoulder');
const leftArm = document.getElementById('left-arm');
const rightArm = document.getElementById('right-arm');
const chest = document.getElementById('chest');
const stomach = document.getElementById('stomach');
const leftLeg = document.getElementById('left-leg');
const rightLeg = document.getElementById('right-leg');

const svgElements = [leftShoulder, rightShoulder, leftArm, rightArm, chest, stomach, leftLeg, rightLeg];





let selectedContainer = null;
let selectedSVG = null;

let chosenContaier = null;
let chosenSVG = null;

function addEventListener(container, text) {
  container.addEventListener("click", function() {
    if (selectedContainer !== container) {
      container.classList.add("selected");
      chosenContaier = container
      console.log(chosenContaier + "hello")
      text.classList.add("selected");
      container.classList.add("pressed");
      setTimeout(function() {
        container.classList.remove("pressed");
      }, 100);
      if (selectedContainer) {
        selectedContainer.classList.remove("selected");
        selectedContainer.childNodes[1].classList.remove("selected");
      }
      selectedContainer = container;
    } else {
      container.classList.toggle("selected");
      text.classList.toggle("selected");
    }
  });
}

addEventListener(barbellContainer, barbellText)
addEventListener(cableContainer, cableText)
addEventListener(dumbellContainer, dumbellText)
addEventListener(bwContainer, bwText)


for (let i = 0; i < svgElements.length; i++) {
  svgElements[i].addEventListener('click', function() {
    for (let j = 0; j < svgElements.length; j++) {
      if (svgElements[j] !== this) {
        svgElements[j].classList.remove('selected');
      }
      else {
        chosenSVG = svgElements[j];
        console.log(chosenSVG + "hello");
      }
    }
    this.classList.toggle('selected');
  });
}

function goToNewPage() {
  if (chosenContaier == barbellContainer && chosenSVG == chest) {
    window.location.href = "barbellChest.html";
  }

  if (chosenContaier == cableContainer && chosenSVG == chest) {
    window.location.href = "cableChest.html";
  }
    
}





