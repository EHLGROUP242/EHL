document.addEventListener("DOMContentLoaded", function () {
    // Gestion du tracking
    function trackParcel() {
        let trackingNumber = document.getElementById("tracking-number").value;
        let result = document.getElementById("tracking-result");
        
        if (trackingNumber === "") {
            result.innerHTML = "❌ Veuillez entrer un numéro de suivi.";
            result.style.color = "red";
            return;
        }
        
        let fakeTracking = {
            "123456": "📦 Colis en cours de livraison.",
            "789012": "✅ Colis livré.",
            "345678": "⏳ Colis en attente d'expédition."
        };
        
        if (fakeTracking.hasOwnProperty(trackingNumber)) {
            result.innerHTML = fakeTracking[trackingNumber];
            result.style.color = "green";
        } else {
            result.innerHTML = "⚠ Numéro de suivi inconnu.";
            result.style.color = "orange";
        }
    }
    
    document.querySelector("#tracking button").addEventListener("click", trackParcel);
    
    // Gestion du changement de langue
    const translations = {
        "fr": {
            "suiviTitre": "Suivi de votre colis",
            "suiviPlaceholder": "Entrez votre numéro de suivi",
            "boutonSuivre": "Suivre",
            "aboutTitle": "À propos de nous",
            "aboutContent": "Nous sommes spécialisés dans le transport de colis avec un service rapide et fiable. Nos services incluent également le passage de frontières pour assurer une livraison fluide à l'international. De plus, nous travaillons directement avec les plateformes de vente en ligne pour simplifier l'expédition des commandes et garantir une expérience optimale aux clients."
        },
        "en": {
            "suiviTitre": "Parcel Tracking",
            "suiviPlaceholder": "Enter your tracking number",
            "boutonSuivre": "Track",
            "aboutTitle": "About Us",
            "aboutContent": "We specialize in parcel transport with fast and reliable service. Our services also include border crossings to ensure smooth international deliveries. Additionally, we work directly with e-commerce platforms to simplify order shipping and provide an optimal experience for customers."
        }
    };
    
    function changeLanguage(lang) {
        document.querySelectorAll("[data-translate]").forEach(element => {
            let key = element.getAttribute("data-translate");
            if (translations[lang][key]) {
                if (element.tagName === "INPUT") {
                    element.placeholder = translations[lang][key];
                } else {
                    element.textContent = translations[lang][key];
                }
            }
        });
    }
    
    document.getElementById("language-selector").addEventListener("change", function () {
        changeLanguage(this.value);
    });
});
