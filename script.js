function trackParcel() {
    let trackingNumber = document.getElementById("trackingNumber").value;
    let result = document.getElementById("trackingResult");

    if (trackingNumber === "") {
        result.innerHTML = "❌ Veuillez entrer un numéro de suivi.";
        result.style.color = "red";
        return;
    }

    // Simulation du suivi (on remplacera plus tard par une vraie base de données)
    let fakeTracking = {
        "123456": "📦 Colis en cours de livraison.",
        "789012": "✅ Colis livré.",
        "345678": "⏳ Colis en attente d'expédition."
    };

    if (fakeTracking[trackingNumber]) {
        result.innerHTML = fakeTracking[trackingNumber];
        result.style.color = "green";
    } else {
        result.innerHTML = "⚠ Numéro de suivi inconnu.";
        result.style.color = "orange";
    }
}
document.addEventListener("DOMContentLoaded", function () {
    const languageSwitcher = document.getElementById("languageSwitcher");

    // Définition des traductions
    const translations = {
        fr: {
            accueil: "Accueil",
            about: "À propos de nous",
            services: "Nos services",
            contact: "Nous contacter",
            suiviTitre: "Suivi de votre colis",
            suiviPlaceholder: "Entrez votre numéro de suivi",
            boutonSuivre: "Suivre"
        },
        en: {
            accueil: "Home",
            about: "About Us",
            services: "Our Services",
            contact: "Contact Us",
            suiviTitre: "Track Your Package",
            suiviPlaceholder: "Enter your tracking number",
            boutonSuivre: "Track"
        }
    };

    // Fonction pour changer la langue
    function changeLanguage(lang) {
        document.querySelector("nav ul li:nth-child(1) a").textContent = translations[lang].accueil;
        document.querySelector("nav ul li:nth-child(2) a").textContent = translations[lang].about;
        document.querySelector("nav ul li:nth-child(3) a").textContent = translations[lang].services;
        document.querySelector("nav ul li:nth-child(4) a").textContent = translations[lang].contact;
        document.querySelector("#tracking h1").textContent = translations[lang].suiviTitre;
        document.querySelector("#tracking-number").setAttribute("placeholder", translations[lang].suiviPlaceholder);
        document.querySelector("#tracking button").textContent = translations[lang].boutonSuivre;

        // Sauvegarde de la langue choisie
        localStorage.setItem("lang", lang);
    }

    // Écouteur d'événement sur le sélecteur de langue
    languageSwitcher.addEventListener("change", function () {
        changeLanguage(this.value);
    });

    // Vérifier s'il y a une langue enregistrée dans le stockage local
    const savedLang = localStorage.getItem("lang") || "fr";
    languageSwitcher.value = savedLang;
    changeLanguage(savedLang);
});

