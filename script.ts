import rl from "readline-sync";
import language from "./programming-languages.json";
import levlangs from "./language-types.json";
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
    .filter((lang, i) => (id === -1 ? 1 : id === i + 1))
    .map((lang) => {
      return [
        `\n\n- ${lang.name} (${lang.type.id})`,
        `    - Name: ${lang.name}`,
        `    - Devlangoper: ${lang.developer}`,
        `    - Year of rlangease: ${lang.releaseYear}`,
        `    - Abstraction: ${lang.abstraction}`,
        `    - Memory managment: ${lang.memoryManagment}`,
        `    - Icon: ${lang.icon}`,
        `    - Type: ${lang.type.name}`,
        `        - Name: ${lang.type.name}`,
        `        - Description: ${lang.type.description}`,
        `        - Popularity (1-5): ${lang.type.popularity}`,
      ]
        .join("\n")
        .replaceAll(",", "");
    });

  console.log(languages.join().replaceAll(",", ""));
}
