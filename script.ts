import rl from "readline-sync";
import language from "./programming-languages.json";
import levels from "./language-types.json";
import "./interfaces.ts";

console.log("=== JSON Data Viewer ===");

let running: boolean = true;

while (running) {
  console.log("\n1. View all languages");
  console.log("2. Filter by ID");
  console.log("3. Exit\n");

  const choice: number = rl.questionInt("Enter your choice: ");

  switch (choice) {
    case 1:
      ShowLanguages();
      break;
    case 2:
      const filterId = rl.questionInt(
        `Choose an ID to filter by (1-${language.length}): `,
      );

      if (filterId >= 1 && filterId <= 10) {
        ShowLanguages(filterId);
      } else {
        console.log("Invalid ID.");
      }
      break;
    case 3:
      running = false;
      break;
    default:
      console.log("Invalid option.");
      break;
  }
}

function ShowLanguages(id: number = -1) {
  const languages: string[] = language
    .filter((el, i) => (id === -1 ? 1 : id === i + 1))
    .map((el) => {
      return [
        `\n\n- ${el.name} (${el.type.id})`,
        `\t- Name: ${el.name}`,
        `\t- Developer: ${el.developer}`,
        `\t- Releasedate: ${el.releaseYear}`,
        `\t- Abstraction: ${el.abstraction}`,
        `\t- Memory managment: ${el.memoryManagment}`,
        `\t- Icon: ${el.icon}`,
        `\t- Type: ${el.type.name}`,
        `\t\t- Name: ${el.type.name}`,
        `\t\t- Description: ${el.type.description}`,
        `\t\t- Popularity: ${el.type.popularity}`,
      ]
        .join("\n")
        .replaceAll(",", "");
    });

  console.log(languages.join().replaceAll(",", ""));
}
