# 🎮 AO Chifoumi

Petit jeu web de **Pierre – Feuille – Ciseaux** (Chifoumi) développé en HTML, CSS et JavaScript vanilla.  
Le but : affronter le **Chifoumi Sensei** et tenter de prédire ses coups mieux que lui.

---

## ✨ Fonctionnalités

- Choix interactif entre **Pierre**, **Feuille** et **Ciseaux** via des boutons illustrés.
- Adversaire contrôlé par l’ordinateur avec choix aléatoire.
- Affichage dynamique du résultat du coup :
  - Rappel de ton choix
  - Coup joué par le Sensei
  - Message indiquant victoire, défaite ou égalité.
- Thème **light / dark** avec bouton de bascule utilisant `color-scheme` et `light-dark()`.
- Interface centrée et responsive, avec mise en page Flexbox et assets pixel art pour les icônes.

---

## 🛠️ Stack technique

- **HTML5** : structure de la page et des boutons de sélection.
- **CSS3** :
  - Flexbox pour l’alignement et la mise en page.
  - Unités relatives (`vh`, `gap`, etc.) pour le centrage.
  - Gestion du thème avec `color-scheme` et la fonction `light-dark()`.
- **JavaScript vanilla** :
  - Gestion des événements (`addEventListener`) sur les boutons.
  - Génération aléatoire du choix de l’ordinateur.
  - Logique du jeu (comparaison des choix, calcul du résultat) et mise à jour du DOM.

---

## 🚀 Installation & lancement

1. Cloner le dépôt :

git clone https://github.com/Alloudev/AO-chifoumi.git

2. Ouvrir le dossier du projet :


3. Ouvrir `index.html` dans ton navigateur  
(ou lancer un petit serveur local type **Live Server** dans VS Code pour un meilleur confort).

Le jeu est entièrement côté client, aucune dépendance ni build n’est nécessaire.

---

## 📌 Règles du jeu

- Clique sur **Pierre**, **Feuille** ou **Ciseaux**.
- Le Sensei choisit aléatoirement l’un des trois symboles.
- Le résultat s’affiche dans le panneau central :
- Pierre bat Ciseaux.
- Ciseaux bat Feuille.
- Feuille bat Pierre.
- Même symbole → égalité.

Tu peux enchaîner les manches autant que tu veux pour tenter de dompter le Chifoumi Sensei.

---

## 🔮 Pistes d’amélioration

- Ajout d’un **compteur de score** (joueur vs Sensei) avec historique des manches.
- Possibilité de jouer en **BO3 / BO5** avec écran de fin de partie.
- Animations et feedback visuel plus poussés au lieu de simples textes.
- Adaptation mobile plus poussée (touch, vibrations, etc.).
