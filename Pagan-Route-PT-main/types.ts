export type Page = 
  | 'home'
  | 'jornada' 
  | 'compendio' 
  | 'herbario' 
  | 'cristais' 
  | 'sopros' 
  | 'roda-do-ano' 
  | 'sigilos' 
  | 'panteao' 
  | 'galeria' 
  | 'guardiao' 
  | 'santuario' 
  | 'consultas';

export interface NavItem {
    id: Page;
    label: string;
    icon: string;
}

export interface NavigationCategory {
    title: string;
    icon: string;
    pages: NavItem[];
}
