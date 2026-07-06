// Typing effect
const text = "Web Developer";
let i = 0;

function type() {
  if (i < text.length) {
    document.getElementById("role").innerHTML += text[i];
    i++;
    setTimeout(type, 80);
  }
}
type();