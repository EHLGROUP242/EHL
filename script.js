document.addEventListener("DOMContentLoaded", function () {
    const translations = {
        fr: {
            navAccueil: "Accueil",
            navSuivi: "Suivi",
            navApropos: "À propos",
            navServices: "Nos services",
            navContact: "Nous contacter",
            aboutTitle: "À propos de nous",
            aboutText: `Chez EHL International, nous nous engageons à offrir des services de transport de colis rapides, fiables et sécurisés à travers le monde. Fondée sur des valeurs de confiance et d’efficacité, notre entreprise a pour mission de simplifier l’expédition pour les particuliers et les professionnels, y compris les envois nécessitant un passage de frontières.<br><br>
            Grâce à notre réseau logistique performant et notre expertise en formalités douanières, nous assurons un acheminement fluide et sécurisé de vos colis, que ce soit pour une expédition nationale ou internationale. Nous prenons en charge toutes les démarches administratives nécessaires pour garantir un passage des frontières sans encombre et éviter tout retard de livraison.<br><br>
            Nous collaborons également directement avec les plateformes de vente en ligne pour assurer une gestion optimisée des commandes et des livraisons, garantissant ainsi une expérience fluide et efficace aux e-commerçants et à leurs clients.<br><br>
            🔹 <strong>Rapidité :</strong> Nous acheminons vos colis dans les meilleurs délais.<br>
            🔹 <strong>Fiabilité :</strong> Chaque étape du transport est suivie avec précision.<br>
            🔹 <strong>Expertise douanière :</strong> Nous facilitons le passage des frontières pour éviter les blocages.<br>
            🔹 <strong>E-commerce :</strong> Intégration avec les plateformes de vente en ligne pour un traitement efficace des commandes.<br>
            🔹 <strong>Service client :</strong> Une équipe dédiée est à votre écoute pour vous accompagner.<br><br>
            Avec EHL International, vos colis voyagent en toute sécurité, partout dans le monde !`,
            trackingPlaceholder: "Entrez votre numéro de suivi",
            trackingButton: "Suivre",
            trackingInvalid: "❌ Numéro de suivi invalide."
        },
        en: {
            navAccueil: "Home",
            navSuivi: "Tracking",
            navApropos: "About",
            navServices: "Our Services",
            navContact: "Contact Us",
            aboutTitle: "About Us",
            aboutText: `At EHL International, we are committed to providing fast, reliable, and secure parcel transport services worldwide. Built on values of trust and efficiency, our company aims to simplify shipping for both individuals and businesses, including cross-border shipments.<br><br>
            Thanks to our efficient logistics network and expertise in customs procedures, we ensure smooth and secure transportation of your packages, whether for national or international shipping. We handle all necessary administrative processes to guarantee seamless customs clearance and prevent delivery delays.<br><br>
            We also work directly with e-commerce platforms to optimize order and delivery management, ensuring a seamless and efficient experience for online merchants and their customers.<br><br>
            🔹 <strong>Speed:</strong> We deliver your parcels as quickly as possible.<br>
            🔹 <strong>Reliability:</strong> Every step of the transport process is precisely monitored.<br>
            🔹 <strong>Customs Expertise:</strong> We facilitate border crossings to avoid blockages.<br>
            🔹 <strong>E-commerce:</strong> Integration with online sales platforms for efficient order processing.<br>
            🔹 <strong>Customer Service:</strong> A dedicated team is at your service to assist you.<br><br>
            With EHL International, your parcels travel safely around the world!`,
            trackingPlaceholder: "Enter your tracking number",
            trackingButton: "Track",
            trackingInvalid: "❌ Invalid tracking number."
        }
    };

    function updateLanguage(lang) {
        console.log("Langue appliquée:", lang);
        document.querySelectorAll("[data-translate]").forEach(element => {
            const key = element.getAttribute("data-translate");
            if (translations[lang][key]) {
                element.innerHTML = translations[lang][key];
            }
        });
    }

    const languageSelector = document.getElementById("language-selector");
    if (languageSelector) {
        languageSelector.addEventListener("change", function () {
            updateLanguage(this.value);
        });
    }

    updateLanguage(languageSelector.value || "fr");

    // Tracking functionality
    let fakeTracking = {
        "123456": "📦 Colis en cours de livraison.",
        "789012": "✅ Colis livré.",
        "345678": "⏳ Colis en attente d'expédition."
    };

    const trackingForm = document.getElementById("tracking-form");
    const trackingInput = document.getElementById("tracking-number");
    const trackingResult = document.getElementById("tracking-result");

    if (trackingForm) {
        trackingForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const trackingNumber = trackingInput.value.trim();
            if (fakeTracking[trackingNumber]) {
                trackingResult.textContent = fakeTracking[trackingNumber];
            } else {
                trackingResult.textContent = translations[languageSelector.value || "fr"].trackingInvalid;
            }
        });
    }
});
