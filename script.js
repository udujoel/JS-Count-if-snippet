button = document.getElementById('button');
display = document.getElementById('display');
let counter = 0;
let t = 0;

function reset() {
  counter = 0;
}
function setTime(timer) {
  t = setTimeout(reset, timer);
}

button.addEventListener('click', e => {
  e.preventDefault();
  counter++;
  allowed = false;
  display.innerHTML = counter;
  clearTimeout(t);
  setTime(5000);
  button.disabled = true;
  setTimeout(() => {
    button.disabled = false;
  }, 1000);
});
