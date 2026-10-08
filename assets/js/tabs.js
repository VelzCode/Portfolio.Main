const buttons = document.querySelectorAll(".tab-btn");
const panels = document.querySelectorAll(".profile-container, .pscontent-wrapper");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const selectedTab = button.dataset.tab;

        panels.forEach((panel) => {
            if (selectedTab === panel.dataset.tab) {
                panel.classList.add("active");
            } else {
                panel.classList.remove("active");
            }
        })

        buttons.forEach((button) => {
            if (selectedTab === button.dataset.tab) {
                button.classList.add("active");
            } else {
                button.classList.remove("active");
            }
        })
    })
})