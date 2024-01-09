import {
  AlvinImg,
  AndrewImg,
  AnurajImg,
  BenjaminImg,
  BinalImg,
  BoyaImg,
  BradleyImg,
  CarsonImg,
  CarterImg,
  CatImg,
  DanielchenImg,
  DanielyuImg,
  EmilyImg,
  EmmaImg,
  EugeneImg,
  FaizaanImg,
  HargunImg,
  HimaImg,
  IngridImg,
  IvanImg,
  JasmineImg,
  JeffImg,
  JenniferImg,
  JosephImg,
  KaileyImg,
  KateImg,
  KevinImg,
  KrystalImg,
  LamImg,
  LaurenImg,
  LeonImg,
  LilyImg,
  LisaImg,
  MedhaImg,
  NickImg,
  OanaImg,
  PhoebeImg,
  PhuongImg,
  RebeccaImg,
  RoselynImg,
  SerenaImg,
  ShubImg,
  StephanieImg,
  TanishiImg,
  YassineImg,
  YinanImg,
} from "src/assets/img";

export interface Organizer {
  name: string;
  team:
    | "Design"
    | "Technical"
    | "Finance"
    | "Logistics"
    | "Marketing"
    | "Sponsorship"
    | "Product Manager"
    | "Internal Operations"
    | "Co-director"
    | "Design Advisor"
    | "Marketing Advisor"
    | "Sponsorship Advisor"
    | "Logistics Advisor";
  emoji: string;
  img: string;
  srcSet?: string;
}

export const ORGANIZERS: Organizer[] = [
  // backend
  {
    name: "Kshitij Verma",
    team: "Technical",
    emoji: "🗿",
    img: BoyaImg,
  },

  // frontend
  // {
  //   name: "Jennifer Lu",
  //   team: "Frontend",
  //   emoji: "🔥",
  //   img: JenniferImg,
  // },
];
