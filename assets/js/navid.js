const navAbout = document.querySelector("#nav-about");
const navWork = document.querySelector("#nav-work");
const aboutPanel = document.querySelector("#about");
const workPanel = document.querySelector("#work");

navAbout.addEventListener("click", (event) => {
    event.preventDefault();

    const tabButton = document.querySelector(`.tab-btn[data-tab="about"]`);
        tabButton.click();
        aboutPanel.scrollIntoView();
});

navWork.addEventListener("click", (event) => {
    event.preventDefault();

    const tabButton = document.querySelector(`.tab-btn[data-tab="work"]`);
        tabButton.click();
        workPanel.scrollIntoView();
});

const navLinks = document.querySelectorAll(".nav-container-main a, .nav-container-social > a");
    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            navLinks.forEach((otherLink) => {
                otherLink.classList.remove("current");
            });
            link.classList.add("current");
        });
    });