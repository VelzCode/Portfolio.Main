const searchInput = document.querySelector(".search-input");
const searchableItems = document.querySelectorAll(".searchable");
const searchResults = document.querySelector(".search-results");
const searchForm = document.querySelector(".search-wrapper");

searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const searchTerm = searchInput.value.trim().toLowerCase();
        

    if (searchTerm === "") {
        return;
    }

    const matches = [];

    searchableItems.forEach((item) => {
        const itemText = item.textContent.trim().toLowerCase();
        const words = itemText.split(/\s+/);
        const isMultiWord = searchTerm.includes(" ");

        let isMatch;

        if (isMultiWord) {
            isMatch = itemText.includes(searchTerm);
        } else {
            isMatch = words.some((word) => {
                return word === searchTerm;
            });
        }
 
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