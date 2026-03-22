const response = await fetch("./programming-languages.json");
const languages = await response.json();

displayItems(languages);

document.getElementById("btn-search").addEventListener("click", () => {
  const searchValue = document.getElementById("search-value").value;

  const filteredLanguages = languages.filter((lang) => {
    return lang.name.toLowerCase().includes(searchValue);
  });

  displayItems(filteredLanguages);
});

function displayItems(langs) {
  const table = document.querySelector(".item-list");

  table.innerHTML = `
    <table class="item-list">
      <tr>
        <th>Icon</th>
        <th>Name</th>
        <th>Developer</th>
        <th>Year of release</th>
        <th>Abstraction</th>
        <th>Type</th>
      </tr>
    </table>
`;

  langs.forEach((lang) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td><img src="${lang.icon}" /></td>
      <td><em>${lang.name}</em></td>
      <td>${lang.developer}</td>
      <td>${lang.releaseYear}</td>
      <td>${lang.abstraction}</td>
      <td><button type="click" id="${lang.id}">View</button></td>
  `;

    table.appendChild(row);
  });
}

const info = document.querySelector(".info-ui");
info.style.display = "none";
document.querySelector(".item-list").addEventListener("click", (e) => {
  const selected = languages.find((lang) => e.target.id === lang.id);

  if (selected) {
    info.style.display = "flex";

    info.innerHTML = `
      <img src="./assets/close-icon.png" id="btn-close" />
      <img src="${selected.icon}" id="icon" />
      <em>${selected.name}</em>
      <p>${selected.developer}</p>
      <p>${selected.releaseYear}</p>
      <p>${selected.abstraction}</p>
      <p>${selected.memoryManagment}</p>
      <p>${selected.type.name}</p>
      <p>${selected.type.description}</p>
      <p>Popularity: ${selected.type.popularity} / 5</p>
    `;
  }

  document.getElementById("btn-close").addEventListener("click", () => {
    info.style.display = "none";
    info.innerHTML = "";
  });
});
