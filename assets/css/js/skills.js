const filterButtons = document.querySelectorAll(".skill-filter");
const skillCards = document.querySelectorAll(".skill-card");

filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const category = button.dataset.category;

        filterButtons.forEach((filterButton) => {
            filterButton.classList.remove("active");
        });

        button.classList.add("active");

        skillCards.forEach((card) => {
            const cardSkills = card.dataset.skills;
            const isMatch = cardSkills.includes(category);

            card.classList.toggle("active", isMatch);

        });
    });
});