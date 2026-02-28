export interface Project {
    id: number;
    title: string;
    description: string;
    tech: string[];
    imageUrl?: string;
    githubUrl?: string;
    demoUrl?: string;
  }