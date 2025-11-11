import { NavigationCategory, Page } from '../types';

export const NAVIGATION_DATA: NavigationCategory[] = [
    {
        title: 'O Grimório Essencial',
        icon: 'ph-book-open-text',
        pages: [
            { id: 'jornada', label: 'Jornada Florescer', icon: 'ph-spiral' },
            { id: 'roda-do-ano', label: 'Roda do Ano', icon: 'ph-yin-yang' },
            { id: 'panteao', label: 'O Panteão', icon: 'ph-key' },
            { id: 'galeria', label: 'Galeria Onírica', icon: 'ph-eye' },
        ],
    },
    {
        title: 'Ferramentas do Artífice',
        icon: 'ph-magic-wand',
        pages: [
            { id: 'compendio', label: 'Compêndio Sincrético', icon: 'ph-scroll' },
            { id: 'herbario', label: 'Herbário Sazonal (BR)', icon: 'ph-flower-lotus' },
            { id: 'cristais', label: 'Guia de Cristais', icon: 'ph-atom' },
            { id: 'sopros', label: 'Sopros de Vida', icon: 'ph-wind' },
            { id: 'sigilos', label: 'O Forjador de Sigilos', icon: 'ph-magic-wand' },
        ],
    },
    {
        title: 'O Oráculo Pessoal',
        icon: 'ph-user-circle',
        pages: [
            { id: 'guardiao', label: 'Guardião', icon: 'ph-user-circle' },
            { id: 'santuario', label: 'Santuário', icon: 'ph-star-four' },
            { id: 'consultas', label: 'Consultas', icon: 'ph-chats-circle' },
        ],
    },
];
