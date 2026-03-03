export interface Skill {
    name: string;
    level: number;   // 0–100
  }
  
  export interface SkillBlock {
    icon: string;
    title: string;
    skills: Skill[];
    tags: string[];
  }
  
  export interface Experience {
    period: string;
    role: string;
    company: string;
    description: string;
  }