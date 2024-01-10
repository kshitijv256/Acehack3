import {
  Year2014Img,
  Year2014AltImg,
  Year2015Img,
  Year2015AltImg,
} from "src/assets/img";

import { theme } from "../../styles";

interface YearImage {
  source: HTMLImageElement;
  orientation: string;
  top: {
    isMobile: string;
    isTablet: string;
    isMedium: string;
    isDesktop: string;
  };
  left: {
    isMobile: string;
    isTablet: string;
    isMedium: string;
    isDesktop: string;
  };
  order: number;
  alt: string;
}

export interface Year {
  year: string;
  gradientStart: string;
  gradientEnd: string;
  description: string[];
  top: {
    isMobile: string;
    isTablet: string;
    isMedium: string;
    isDesktop: string;
  };
  left: {
    isMobile: string;
    isTablet: string;
    isMedium: string;
    isDesktop: string;
  };
  order: number;
  images: YearImage[];
  fathomEventCode: string;
}

const _2022: Year = {
  year: "2022",
  gradientStart: theme.colors.primary.cyan,
  gradientEnd: theme.colors.primary.blue,
  description: [
    "Hack the North is founded by a group of undergraduate students at the University of Waterloo in Ontario, Canada. Thank you for 10 years of memories 💙",
    "Keynote Speakers: Chamath Palihapitiya, Jason Calacanis, & Sam Altman",
  ],
  top: {
    isMobile: "180px",
    isTablet: "-60px",
    isMedium: "-20px",
    isDesktop: "-25px",
  },
  left: {
    isMobile: "-183px",
    isTablet: "15px",
    isMedium: "15px",
    isDesktop: "0px",
  },
  order: 2,
  images: [
    {
      source: Year2014Img,
      orientation: "horizontal",
      top: {
        isMobile: "15px",
        isTablet: "-150px",
        isMedium: "-150px",
        isDesktop: "-140px",
      },
      left: {
        isMobile: "-87px",
        isTablet: "200px",
        isMedium: "200px",
        isDesktop: "275px",
      },
      order: 0,
      alt: "Two hackers serve themselves popcorn from a mobile popping machine",
    },
    {
      source: Year2014AltImg,
      orientation: "horizontal",
      top: {
        isMobile: "505px",
        isTablet: "240px",
        isMedium: "360px",
        isDesktop: "275px",
      },
      left: {
        isMobile: "-87px",
        isTablet: "140px",
        isMedium: "140px",
        isDesktop: "230px",
      },
      order: 1,
      alt: "A wide shot of the University of Waterloo’s E7 Building with a large banner which reads “Hack the North” strung up above the entryway",
    },
  ],
  fathomEventCode: "SEYHNZIH",
};

const _2023: Year = {
  year: "2023",
  gradientStart: theme.colors.primary.pink,
  gradientEnd: theme.colors.primary.purple,
  description: [
    "All workshops opened to the public",
    "Video messages from Sal Khan, Alexis Ohanian, Chris Hadfield",
  ],
  top: {
    isMobile: "220px",
    isTablet: "-20px",
    isMedium: "20px",
    isDesktop: "50px",
  },
  left: {
    isMobile: "-183px",
    isTablet: "20px",
    isMedium: "20px",
    isDesktop: "10px",
  },
  order: 2,

  images: [
    {
      source: Year2015Img,
      orientation: "horizontal",
      top: {
        isMobile: "50px",
        isTablet: "220px",
        isMedium: "260px",
        isDesktop: "275px",
      },
      left: {
        isMobile: "-90px",
        isTablet: "170px",
        isMedium: "170px",
        isDesktop: "230px",
      },
      order: 0,
      alt: "A large group of hackers sits around several tables that have been pushed together. Laptops and hardware components litter the desk, and a blackboard behind them displays sketches of concepts for their project",
    },
    {
      source: Year2015AltImg,
      orientation: "horizontal",
      top: {
        isMobile: "470px",
        isTablet: "-140px",
        isMedium: "-140px",
        isDesktop: "-140px",
      },
      left: {
        isMobile: "-125px",
        isTablet: "200px",
        isMedium: "200px",
        isDesktop: "275px",
      },
      order: 1,
      alt: "A therapy dog bows its head as a group of three hackers smile and pet it",
    },
  ],
  fathomEventCode: "BGSG89S1",
};

export const Years = [_2022, _2023];
