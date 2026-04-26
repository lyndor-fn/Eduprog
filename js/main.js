document.addEventListener("DOMContentLoaded", () => {
  const ctaButton = document.getElementById("cta-btn");

  if (ctaButton) {
    ctaButton.addEventListener("click", () => {
      alert("Bienvenue sur EduConnect !");
    });
  }
});
