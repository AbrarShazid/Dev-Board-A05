// color changer
function rgbColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

document.getElementById("color-changer").addEventListener("click", function () {
  document.body.style.backgroundColor = rgbColor();
});
