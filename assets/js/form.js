const contactForm = document.querySelector(".contact-form");
const formStatus = document.querySelector(".form-status");

contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    formStatus.classList.remove("error");

    const tickedBoxes = document.querySelectorAll(`input[name="reason"]:checked`);

    if (tickedBoxes.length === 0) {
        formStatus.classList.add("error");
        formStatus.textContent = "No box selected, please pick at least one";
        setTimeout(() => {
            formStatus.textContent = "";
        }, 4000);
        return;
    }

    const response = await fetch(contactForm.action, {
        method: "POST",
        body: new FormData(contactForm),
        headers: { Accept: "application/json" }
    });

    if (response.ok) {
        formStatus.textContent = "Success!! Your message has been sent, thank you!";
        contactForm.reset();
        setTimeout(() => {
            formStatus.textContent = "";
        }, 4000);
    } else {
        formStatus.classList.add("error");
        formStatus.innerHTML = `Unfortunately your message could not be sent, please contact the <a href="mailto:jason.m.dewhurst@protonmail.com">Administrator</a>`;
    }
});