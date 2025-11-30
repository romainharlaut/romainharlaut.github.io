document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".btn-toggle");

    buttons.forEach(button => {
        button.addEventListener("click", function () {

            const content = this.nextElementSibling;

            if (content.classList.contains("open")) {
                content.style.maxHeight = content.scrollHeight + "px";
                requestAnimationFrame(() => {
                    content.style.maxHeight = "0px";
                });

                content.classList.remove("open");
                this.textContent = "En savoir plus";

            } else {
                content.classList.add("open");

                content.style.maxHeight = content.scrollHeight + "px";

                this.textContent = "Réduire";
            }
        });
    });
});
