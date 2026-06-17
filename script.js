const roles = [
  "Frontend Developer",
  "Web Development Intern",
  "IT Student",
  "Future Software Engineer"
];

let i = 0;

function typingEffect() {

    if (i < text.length) {
        document.getElementById("typing-text").innerHTML += text.charAt(i);
        i++;
        setTimeout(typingEffect, 80);
    }
}

window.onload = typingEffect;