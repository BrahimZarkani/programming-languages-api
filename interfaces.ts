interface Language {
  id: string;
  name: string;
  developer: string;
  releaseYear: number;
  abstraction: string;
  releaseDate: string;
  memoryManagment: string;
  icon: string;
  type: Type[];
}

interface Type {
  id: string;
  name: string;
  description: string;
  popularity: number;
}
