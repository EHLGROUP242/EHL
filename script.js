/* Définition des couleurs principales */
:root {
    --bleu-primaire: #0056A6;
    --bleu-secondaire: #003366;
    --bleu-clair: #4A90E2;
    --bleu-fonce: #002F5E;
    --blanc: #FFFFFF;
}

/* Réinitialisation des styles de base */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Open Sans', Arial, sans-serif;
    scroll-behavior: smooth; /* Ajout pour un défilement fluide */
}

body {
    background-color: var(--blanc);
    color: var(--bleu-secondaire);
    line-height: 1.6;
}

/* Conteneur vidéo */
.video-container {
    position: relative;
    width: 100%;
    height: 60vh; /* Rétablissement de la hauteur de la vidéo */
    overflow: hidden;
}

.video-container video {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.video-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
}

/* Style de la barre de navigation */
.navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: rgba(0, 86, 166, 0.8);
    padding: 9px 30px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    height: 60px;
}

.navbar-logo-container {
    display: flex;
    align-items: center;
}

.navbar-logo {
    height: 60px;
}

.navbar-menu {
    list-style: none;
    display: flex;
    gap: 20px;
    align-items: center;
    margin: auto;
}

.navbar-menu li {
    display: inline;
}

.navbar-menu a {
    text-decoration: none;
    color: var(--blanc);
    font-size: 16px;
    font-weight: bold;
    transition: color 0.3s;
}

.navbar-menu a:hover {
    color: var(--bleu-clair);
}

/* Accessibilité */
.navbar-menu a:focus {
    outline: 2px solid var(--bleu-clair);
    outline-offset: 2px;
}

/* Sélecteur de langue */
.language-selector {
    background-color: var(--blanc);
    color: var(--bleu-primaire);
    border: none;
    padding: 5px 10px;
    font-size: 14px;
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;
}

.language-selector:focus {
    outline: 2px solid var(--bleu-clair);
}

/* Conteneur principal */
.container {
    width: 80%;
    margin: auto;
    padding-top: 0px; /* Ajustement pour remonter davantage la section */
    text-align: center;
    position: relative;
    z-index: 2;
}

/* Section de suivi */
#tracking {
    margin-top: -200px; /* Réduction de l'espacement pour remonter davantage */
    padding: 30px 20px;
    text-align: center;
    position: relative;
    z-index: 3;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 10px;
    display: inline-block;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
}

#tracking h1 {
    font-size: 24px;
    color: var(--bleu-secondaire);
    margin-bottom: 20px;
}

#tracking-number {
    width: 300px;
    padding: 10px;
    border: 2px solid var(--bleu-primaire);
    border-radius: 5px;
    font-size: 16px;
}

#tracking button {
    background-color: var(--bleu-clair);
    color: var(--blanc);
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    margin-left: 10px;
    cursor: pointer;
    border-radius: 5px;
    transition: background 0.3s;
}

#tracking button:hover {
    background-color: var(--bleu-fonce);
}

#tracking-result {
    margin-top: 20px;
    font-size: 18px;
    color: var(--bleu-secondaire);
}

/* Section À propos de nous */
#about {
    margin-top: 50px;
    padding: 40px 20px;
    text-align: center;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 10px;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
}

#about h2 {
    font-size: 26px;
    color: var(--bleu-secondaire);
    margin-bottom: 15px;
}

#about p {
    font-size: 18px;
    color: var(--bleu-secondaire);
}

/* Pied de page */
.footer {
    background-color: var(--bleu-secondaire);
    color: var(--blanc);
    text-align: center;
    padding: 15px 0;
    margin-top: 40px;
}

/* Ajout de la section dans le HTML */
<div id="about">
    <h2>À propos de nous</h2>
    <p>Nous sommes spécialisés dans le transport de colis avec un service rapide et fiable. Nos services incluent également le passage de frontières pour assurer une livraison fluide à l'international. De plus, nous travaillons directement avec les plateformes de vente en ligne pour simplifier l'expédition des commandes et garantir une expérience optimale aux clients.</p>
</div>

/* Mise à jour de la navigation */
<li><a href="#about">À propos de nous</a></li>
