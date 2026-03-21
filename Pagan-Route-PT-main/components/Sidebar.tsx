import React, { useState, useEffect } from 'react';
import type { NavigationCategory, Page } from '../types';

interface SidebarProps {
    navigationData: NavigationCategory[];
    activePage: Page;
    setActivePage: (page: Page) => void;
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

const SidebarBook: React.FC<{
    category: NavigationCategory;
    activePage: Page;
    setActivePage: (page: Page) => void;
    isOpen: boolean;
    onToggle: () => void;
}> = ({ category, activePage, setActivePage, isOpen, onToggle }) => {
    const isBookActive = category.pages.some(p => p.id === activePage);

    return (
        <div className="py-2">
            <div className="h-1 bg-amber-900/50 border-y border-amber-800/60"></div>
            
            <button
                onClick={onToggle}
                className={`w-full flex items-center p-3 text-left transition-all duration-200 group ${isBookActive ? 'text-cyan-300' : 'text-amber-200 hover:text-white'}`}
                aria-expanded={isOpen}
            >
                <i className={`mr-3 text-2xl transition-transform duration-300 ${category.icon} ${isBookActive ? 'rotate-3 scale-110' : 'group-hover:scale-110'}`}></i>
                <span className="brand-title text-lg tracking-wider">{category.title}</span>
                <i className={`ph ph-caret-down ml-auto text-xl transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}></i>
            </button>

            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
                <ul className="pl-6 pr-2 py-2 space-y-1 border-l-2 border-amber-700/50 ml-5">
                    {category.pages.map((item) => (
                        <li key={item.id}>
                            <a
                                href="#"
                                onClick={(e) => { e.preventDefault(); setActivePage(item.id); }}
                                className={`flex items-center p-2 text-sm rounded-md transition-colors duration-200 ${activePage === item.id ? 'bg-black/30 text-white font-semibold' : 'text-gray-300 hover:bg-black/20 hover:text-white'}`}
                            >
                                <i className={`mr-3 text-lg ${item.icon}`}></i>
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

const Sidebar: React.FC<SidebarProps> = ({ navigationData, activePage, setActivePage, isOpen, setIsOpen }) => {
    const [openBook, setOpenBook] = useState<string | null>(() => {
        const activeCategory = navigationData.find(cat => cat.pages.some(p => p.id === activePage));
        return activeCategory ? activeCategory.title : navigationData[0]?.title || null;
    });

    useEffect(() => {
        const activeCategory = navigationData.find(cat => cat.pages.some(p => p.id === activePage));
        if (activeCategory && openBook !== activeCategory.title) {
            setOpenBook(activeCategory.title);
        }
    }, [activePage, navigationData, openBook]);

    const handleToggleBook = (title: string) => {
        setOpenBook(openBook === title ? null : title);
    };

    return (
        <aside 
            id="sidebar" 
            className={`fixed top-0 left-0 w-72 h-screen pt-4 z-40 transform transition-transform duration-300 ease-in-out bg-amber-950/80 backdrop-blur-lg border-r border-amber-700/50 ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}
            style={{ backgroundImage: 'url(https://www.transparenttextures.com/patterns/wood-pattern.png)' }}
        >
            <div className="h-full px-2 pb-4 overflow-y-auto">
                <h1 className="brand-title text-3xl text-center py-4 mb-2 text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-cyan-300">
                    Rota Pagã
                </h1>
                <p className="text-center text-sm text-amber-200/70 mb-4 -mt-2">leandromellof@gmail.com</p>

                <nav>
                    {navigationData.map((category) =>
                        <SidebarBook
                            key={category.title}
                            category={category}
                            activePage={activePage}
                            setActivePage={setActivePage}
                            isOpen={openBook === category.title}
                            onToggle={() => handleToggleBook(category.title)}
                        />
                    )}
                </nav>
                <div className="h-1 bg-amber-900/50 border-y border-amber-800/60 mt-2"></div>
                <div className="p-4 mt-2">
                     <a href="#" className="flex items-center p-2 text-sm rounded-md transition-colors duration-200 text-amber-200/80 hover:bg-black/20 hover:text-white group">
                        <i className="ph ph-sign-out mr-3 text-lg group-hover:scale-110"></i>
                        Sair
                    </a>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
