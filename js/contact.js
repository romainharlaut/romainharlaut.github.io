document.addEventListener("DOMContentLoaded", function () {
  if (typeof emailjs === "undefined") {
    console.error("❌ EmailJS n'est pas chargé !");
    return;
  }

  emailjs.init("nQVWtKnhqyfFHx-bQ");

  const form = document.getElementById("contact-form");

  if (!form) {
    console.error("❌ Formulaire introuvable !");
    return;
  }


  form.addEventListener("submit", function (event) {
    event.preventDefault();

    form.addEventListener("submit", function (event) {
      event.preventDefault();

      emailjs.sendForm("service_2cyfkjs","template_i5r735q",form)
        .then(() => {
          alert("✅ Message envoyé avec succès !");
          form.reset();
        })
        .catch(error => {
          console.error("❌ Erreur :", error);
          alert("Erreur : " + JSON.stringify(error));
        });
    });
  });
});
