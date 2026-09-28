const searchInput = document.querySelector(".search-input");
const searchableItems = document.querySelectorAll(".searchable");
const searchResults = document.querySelector(".search-results");

searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value.trim().toLowerCase();

    if (searchTerm === "") {
        return;
    }

    const matches = [];

    searchableItems.forEach((item) => {
        const itemText = item.textContent.trim().toLowerCase();
        const words = itemText.split(/\s+/);

        const isMatch = words.some((word) => {
            return word.startsWith(searchTerm);
        });

        if (isMatch) {
            matches.push(item);
        }
    });

    searchResults.innerHTML = "";
    matches.forEach((match) => {
        const resultItem = document.createElement("div");
        resultItem.classList.add("search-result");
        resultItem.textContent = match.textContent.trim();
        searchResults.appendChild(resultItem);
    });
});