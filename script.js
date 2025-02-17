function trackParcel() {
    let trackingNumber = document.getElementById("tracking-number").value;
    let result = document.getElementById("tracking-result");

    if (trackingNumber === "") {
        result.innerHTML = "❌ Veuillez entrer un numéro de suivi.";
        result.style.color = "red";
        return;
    }

    // Simulation du suivi (à remplacer par une vraie base de données)
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

// Attacher la fonction au bouton si nécessaire
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("#tracking button").addEventListener("click", trackParcel);
});
