// script.js

document.addEventListener("DOMContentLoaded", function() {
    const ctaButton = document.querySelector(".cta-button");

    // Add pulse effect on hover
    ctaButton.addEventListener("mouseover", function() {
        ctaButton.classList.add("pulse-button");
    });

    // Remove pulse effect when hover ends
    ctaButton.addEventListener("mouseout", function() {
        ctaButton.classList.remove("pulse-button");
    });
});