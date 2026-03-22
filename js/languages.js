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
        <th>Memory managment</th>
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
      <td>${lang.memoryManagment}</td>
      <td><a href="#">View more</a></td>
  `;

    table.appendChild(row);
  });
}
