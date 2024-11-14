// Écouteur d'événement pour le bouton "Oui"
document.getElementById("oui").addEventListener("click", function() {
    document.getElementById("gif-secret").style.display = "block"; // Affiche le GIF
    document.getElementById("audio-noel").play(); // Joue l'audio de Noël
    document.getElementById("popup").style.display = "none"; // Cache le pop-up entier
});

// Écouteur d'événement pour le bouton "Non" pour le faire bouger
document.getElementById("non").addEventListener("mouseover", function() {
    const popup = document.getElementById("popup");
    const popupWidth = popup.offsetWidth;
    const popupHeight = popup.offsetHeight;

    // Calcule une position aléatoire dans la fenêtre pour le bouton "Non"
    const newX = Math.random() * (window.innerWidth - popupWidth);
    const newY = Math.random() * (window.innerHeight - popupHeight);

    document.getElementById("non").style.position = "absolute";
    document.getElementById("non").style.left = newX + "px";
    document.getElementById("non").style.top = newY + "px";
});
