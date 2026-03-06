interface Language {
    id: number,
    name: string,
    description: string,
    foundedYear: number,
    isCompiled: boolean,
    releaseDate: string,
    imageUrl: string,
    paradigm: string,
    useCases: string[],
    languageLevel: Level[]
}

interface Level {
    id: string,
    name: string,
    abstractionScore: number,
    isMemoryManaged: boolean,
    iconUrl: string
}