const response = await fetch("./language-types.json");
const langTypes = await response.json();

displayItems(langTypes);

function displayItems(types) {
  const table = document.querySelector(".item-list");

  table.innerHTML = `
    <table class="item-list">
      <tr>
        <th>Icon</th>
        <th>Name</th>
        <th>Description</th>
        <th>Popularity</th>
      </tr>
    </table>
  `;

  types.forEach((type) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td><img src="${type.id}" /></td>
      <td><em>${type.name}</em></td>
      <td>${type.description}</td>
      <td>${type.popularity}</td>
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