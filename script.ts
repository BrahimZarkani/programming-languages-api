import rl from "readline-sync";

import language from "./programming-languages.json";
import levels from "./language-levels.json";
import "./interfaces.ts";

// const names : string[] = language.map(function(el) {
//     return `${el.name}\n`;
// });

// console.log(names.join().replaceAll(',', ''));

console.log("=== JSON Data Viewer ===");

let running : boolean = true;

while (running) {
    console.log("\n1. View all languages");
    console.log("2. Filter by ID");
    console.log("3. Exit\n");

    const choice : number = rl.questionInt("Enter your choice: ");

    switch (choice) {
        case 1:
            break;

        case 2:
            break;

        case 3:
            running = false;
            break;

        default:
            console.log("Invalid option.");
            break;
    }
}