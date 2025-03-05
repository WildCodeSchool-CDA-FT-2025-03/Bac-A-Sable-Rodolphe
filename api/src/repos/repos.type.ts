import type { Language } from "../languages/languages.type";

export type Repos = {
  id: number;
  description: string;
  name: string;
  url: string;
  languages?: Language[];
};
