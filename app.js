
let increase = 0
let increaseEl = document.getElementById("count-el")
let decreaseEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

function increment() {
  increase += 1;
  if (increase > 10) {
    increase = 10;
  }
  increaseEl.textContent = increase + "🙋";
}

function decrement() {
    increase -= 1;
    if (increase < 0) {
      increase = 0;
    }
    decreaseEl.textContent = increase  + "🙋";

}
function save() {
  saved = increase + "🪑, "
  saveEl.textContent += saved;
  increaseEl.textContent = 0
  increase = 0
  
}

