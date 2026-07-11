// KING DERREN Website Script

console.log("👑 KING DERREN Loaded");

// Efek animasi tombol BUY NOW
const buyButton = document.querySelector(".button");

if (buyButton) {
    buyButton.addEventListener("mouseenter", () => {
        buyButton.style.transform = "scale(1.05)";
    });

    buyButton.addEventListener("mouseleave", () => {
        buyButton.style.transform = "scale(1)";
    });
}

// Animasi saat halaman dibuka
window.addEventListener("load", () => {
    document.body.style.opacity = "1";
});
