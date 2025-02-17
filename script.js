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
