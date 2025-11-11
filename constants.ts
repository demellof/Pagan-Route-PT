
import { NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
    { id: 'jornada', label: 'Jornada Florescer', icon: 'ph-spiral' },
    { id: 'compendio', label: 'Compêndio Sincrético', icon: 'ph-scroll' },
    { id: 'herbario', label: 'Herbário Sazonal (BR)', icon: 'ph-flower-lotus' },
    { id: 'cristais', label: 'Guia de Cristais', icon: 'ph-atom' },
    { id: 'sopros', label: 'Sopros de Vida', icon: 'ph-wind' },
    { id: 'roda-do-ano', label: 'Roda do Ano', icon: 'ph-yin-yang' },
    { id: 'sigilos', label: 'O Forjador de Sigilos', icon: 'ph-magic-wand' },
    { id: 'panteao', label: 'O Panteão', icon: 'ph-key' },
    { id: 'galeria', label: 'Galeria Onírica', icon: 'ph-eye' },
    // FIX: The property 'isSeparator' does not exist in type 'NavItem'.
    // This constant appears to be unused in favor of `data/navigationData.ts`.
    // { isSeparator: true, id: 'guardiao', label: '', icon: ''},
    { id: 'guardiao', label: 'Guardião', icon: 'ph-user-circle' },
    { id: 'santuario', label: 'Santuário', icon: 'ph-star-four' },
    { id: 'consultas', label: 'Consultas', icon: 'ph-chats-circle' },
];