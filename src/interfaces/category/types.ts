export type CategoryType = 
  | "smartphone"
  | "notebook"
  | "tv"
  | "tablet"
  | "headphone"
  | "gameConsole"
  | "vacuumCleaner"
  | "speaker";

export interface ICategory {
  id: number;
  title: string;
  type: CategoryType;
  image: string;
} 