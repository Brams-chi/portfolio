export interface Project {
    id: number;
    number: string;
    featured: boolean;
    title: string;
    description: string;
    tech: string[];
    imageUrl?: string;
    githubUrl?: string;
    demoUrl?: string;
    gradient: string;
  }