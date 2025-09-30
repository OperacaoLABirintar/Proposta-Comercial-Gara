
export interface Experience {
  name: string;
  description: string;
}

export interface PedagogicalAxis {
  title: string;
  pedagogicalIntent: string;
  experiences: Experience[];
  icon: string; // SVG path data
  bgColorClass: string;
}
