// Bouton light/dark
const btn = document.getElementById("themeToggle");
const html = document.documentElement;

btn.addEventListener("click", () => {
  // Vérifie si la page est déjà en dark soit par classe, soit par système (merci l'IA pour celle-là)
  const isSystemDark = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  const hasDarkClass = html.classList.contains("force-dark");
  const hasLightClass = html.classList.contains("force-light");

  // État actuel effectif
  const isCurrentlyDark = hasDarkClass || (!hasLightClass && isSystemDark);

  if (isCurrentlyDark) {
    // Si la page est en dark, ça force le light
    html.classList.remove("force-dark");
    html.classList.add("force-light");
  } else {
    // Sinon ça force le dark
    html.classList.remove("force-light");
    html.classList.add("force-dark");
  }
});

// Déclaration constante chifoumi

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const choices = ["La pierre !", "Les ciseaux !", "La feuille !"];
const gameDesc = document.getElementById("gameDesc");

// Fonction pour récupérer un choices aléatoire

function getRandomChoice() {
  const randomChoice = Math.floor(Math.random() * choices.length);
  return choices[randomChoice];
}

// Logique du jeu
rock.addEventListener("click", () => {
  gameDesc.style.border = "1px solid light-dark(#070709, #efefec)";
  gameDesc.style.borderRadius = "10px";
  gameDesc.style.padding = "5px";
  gameDesc.textContent = "Vous avez joué la pierre !";
  const senseiResult1 = document.createElement("p");
  gameDesc.appendChild(senseiResult1);
  senseiResult1.textContent = "Le maitre a joué :";
  const senseiResult2 = document.createElement("p");
  gameDesc.appendChild(senseiResult2);
  const senseiChoice = getRandomChoice();
  senseiResult2.textContent = senseiChoice;

  if (senseiResult2.textContent === choices[0]) {
    const matchResume = document.createElement("p");
    gameDesc.appendChild(matchResume);
    matchResume.style.fontWeight = "bold";
    matchResume.textContent = "C'est une égalité !";
  } else if (senseiResult2.textContent === choices[1]) {
    const matchResume = document.createElement("p");
    gameDesc.appendChild(matchResume);
    matchResume.style.fontWeight = "bold";
    matchResume.textContent = "C'est une victoire, bravo !";
  } else if (senseiResult2.textContent === choices[2]) {
    const matchResume = document.createElement("p");
    gameDesc.appendChild(matchResume);
    matchResume.style.fontWeight = "bold";
    matchResume.textContent = "C'est une défaite...";
  }
});
paper.addEventListener("click", () => {
  gameDesc.style.border = "1px solid light-dark(#070709, #efefec)";
  gameDesc.style.borderRadius = "10px";
  gameDesc.style.padding = "5px";
  gameDesc.textContent = "Vous avez joué la feuille !";
  const senseiResult1 = document.createElement("p");
  gameDesc.appendChild(senseiResult1);
  senseiResult1.textContent = "Le maitre a joué :";
  const senseiResult2 = document.createElement("p");
  gameDesc.appendChild(senseiResult2);
  const senseiChoice = getRandomChoice();
  senseiResult2.textContent = senseiChoice;

  if (senseiResult2.textContent === choices[0]) {
    const matchResume = document.createElement("p");
    gameDesc.appendChild(matchResume);
    matchResume.style.fontWeight = "bold";
    matchResume.textContent = "C'est une victoire, bravo !";
  } else if (senseiResult2.textContent === choices[1]) {
    const matchResume = document.createElement("p");
    gameDesc.appendChild(matchResume);
    matchResume.style.fontWeight = "bold";
    matchResume.textContent = "C'est une défaite...";
  } else if (senseiResult2.textContent === choices[2]) {
    const matchResume = document.createElement("p");
    gameDesc.appendChild(matchResume);
    matchResume.style.fontWeight = "bold";
    matchResume.textContent = "C'est une égalité !";
  }
});
scissors.addEventListener("click", () => {
  gameDesc.style.border = "1px solid light-dark(#070709, #efefec)";
  gameDesc.style.borderRadius = "10px";
  gameDesc.style.padding = "5px";
  gameDesc.textContent = "Vous avez joué les ciseaux !";
  const senseiResult1 = document.createElement("p");
  gameDesc.appendChild(senseiResult1);
  senseiResult1.textContent = "Le maitre a joué :";
  const senseiResult2 = document.createElement("p");
  gameDesc.appendChild(senseiResult2);
  const senseiChoice = getRandomChoice();
  senseiResult2.textContent = senseiChoice;

  if (senseiResult2.textContent === choices[0]) {
    const matchResume = document.createElement("p");
    gameDesc.appendChild(matchResume);
    matchResume.style.fontWeight = "bold";
    matchResume.textContent = "C'est une défaite...";
  } else if (senseiResult2.textContent === choices[1]) {
    const matchResume = document.createElement("p");
    gameDesc.appendChild(matchResume);
    matchResume.style.fontWeight = "bold";
    matchResume.textContent = "C'est une égalité !";
  } else if (senseiResult2.textContent === choices[2]) {
    const matchResume = document.createElement("p");
    gameDesc.appendChild(matchResume);
    matchResume.style.fontWeight = "bold";
    matchResume.textContent = "C'est une victoire, bravo !";
  }
});
