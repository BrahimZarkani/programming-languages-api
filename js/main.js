// Navigation bar
document.querySelector(".navbar").innerHTML = `
  <a href="./home.html" id="btn-home">
    <img src="./assets/home-idle-icon.png" />
    <p>Home</p>
  </a>
  <a href="./languages.html" id="btn-code">
    <img src="./assets/code-idle-icon.png" />
    <p>Languages</p>
  </a>
  <a href="./types.html" id="btn-gear">
    <img src="./assets/gear-idle-icon.png" />
    <p>Types</p>
  </a>
`;
//

// Navigation effect
document.querySelectorAll("a").forEach((btn) => {
  btn.addEventListener("mouseover", () => {
    changeIcon(btn, "hover");
  });

  btn.addEventListener("mouseleave", () => {
    changeIcon(btn, "idle");
  });
});

function changeIcon(btn, type) {
  btn.querySelector("img").src =
    `./assets/${btn.id.replace("btn-", "")}-${type}-icon.png`;
}
//
