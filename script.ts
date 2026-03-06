import rl from "readline-sync";
import language from "./programming-languages.json";
import levels from "./language-levels.json";
import "./interfaces.ts";

console.log("=== JSON Data Viewer ===");

let running : boolean = true;

while (running) {
    console.log("\n1. View all languages");
    console.log("2. Filter by ID");
    console.log("3. Exit\n");

    const choice : number = rl.questionInt("Enter your choice: ");

    switch (choice) {
        case 1:
            ShowLanguages();
            break;
        case 2:
            const filterId = rl.questionInt(
                `Choose an ID to filter by (1-${language.length}): `
            );

            ShowLanguages(filterId);
            break;
        case 3:
            running = false;
            break;
        default:
            console.log("Invalid option.");
            break;
    }
}

function ShowLanguages(id : number = -1) {
    const languages : string[] = language
    .filter((el,i) => (id === -1) ? 1 : (id === i+1))
    .map((el) => {
        return [
            `\n\n- ${el.name} (${el.languageLevel.id})`,
            `\t- Description: ${el.description}`,
            `\t- Founded year: ${el.foundedYear}`,
            `\t- Compiler: ${el.isCompiled}`,
            `\t- Releasedate: ${el.releaseDate}`,
            `\t- Image url: ${el.imageUrl}`,
            `\t- Paradigm: ${el.paradigm}`,
            `\t- Use cases: ${el.useCases}`,
            `\t- Language level: ${el.languageLevel.name}`,
            `\t\t- Name: ${el.languageLevel.name}`,
            `\t\t- Abstraction score: ${el.languageLevel.abstractionScore}`,
            `\t\t- Memory managed: ${el.languageLevel.isMemoryManaged}`,
            `\t\t- Icon url: ${el.languageLevel.iconUrl}`
        ].join('\n').replaceAll(',', '');
    });

    console.log(languages.join().replaceAll(',', ''));   
}