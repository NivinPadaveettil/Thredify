function customizeClothing() {
    let clothingType = document.getElementById("clothing").value;
    let previewText = `You have selected a ${clothingType}. Your custom design will be applied.`;
    document.getElementById("previewText").innerText = previewText;
}