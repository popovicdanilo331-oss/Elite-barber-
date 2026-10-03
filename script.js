document.addEventListener("DOMContentLoaded", function () {

    const dugme = document.querySelector("#zakazi");
    const forma = document.querySelector("#forma");
    const nazad = document.querySelector("#nazad");

    const form = document.querySelector("#forma form");
    const poruka = document.querySelector("#poruka");

    // Otvori formu
    dugme.addEventListener("click", function () {

        forma.style.display = "flex";

        poruka.textContent = "";

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

    // Slanje rezervacije
    form.addEventListener("submit", async function (event) {

        event.preventDefault();

        poruka.textContent = "Slanje rezervacije...";

        const formData = new FormData(form);

        try {

            const response = await fetch(
                "https://api.web3forms.com/submit",
                {
                    method: "POST",
                    body: formData
                }
            );

            const data = await response.json();

            if (data.success) {

                poruka.textContent =
                    "Termin je uspješno poslat! Hvala na rezervaciji.";

                form.reset();

            } else {

                poruka.textContent =
                    "Došlo je do greške. Pokušajte ponovo.";

            }

        } catch (error) {

            poruka.textContent =
                "Došlo je do greške. Provjerite internet vezu.";

        }

    });

    // Nazad
    nazad.addEventListener("click", function () {

        forma.style.display = "none";

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

});
