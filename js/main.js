// Navigation bar
document.querySelector(".navbar").innerHTML = `
  <a href="./home.html" id="nav-home">
    <img src="./assets/home-idle-icon.png" />
    <p>Home</p>
  </a>
  <a href="./languages.html" id="nav-code">
    <img src="./assets/code-idle-icon.png" />
    <p>Languages</p>
  </a>
  <a href="./types.html" id="nav-gear">
    <img src="./assets/gear-idle-icon.png" />
    <p>Types</p>
  </a>
`;
//

// Navigation hover effect
document.querySelectorAll(".navbar a").forEach((btn) => {
  btn.addEventListener("mouseover", () => {
    changeIcon(btn, "hover");
  });

  btn.addEventListener("mouseleave", () => {
    changeIcon(btn, "idle");
  });
});

function changeIcon(btn, type) {
  btn.querySelector("img").src =
    `./assets/${btn.id.replace("nav-", "")}-${type}-icon.png`;
}
//
