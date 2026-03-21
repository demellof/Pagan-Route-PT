import React, { useState, useCallback, useRef, useEffect } from 'react';
import { Page } from './types';
import { NAVIGATION_DATA } from './data/navigationData';
import Sidebar from './components/Sidebar';
import StarrySky from './components/StarrySky';
import HomePage from './pages/HomePage';
import JornadaFlorescer from './pages/JornadaFlorescer';
import CompendioSincretico from './pages/CompendioSincretico';
import HerbarioSazonal from './pages/HerbarioSazonal';
import GuiaDeCristais from './pages/GuiaDeCristais';
import SoprosDeVida from './pages/SoprosDeVida';
import RodaDoAno from './pages/RodaDoAno';
import ForjadorDeSigilos from './pages/ForjadorDeSigilos';
import Panteao from './pages/Panteao';
import GaleriaOnirica from './pages/GaleriaOnirica';
import Guardiao from './pages/Guardiao';
import Santuario from './pages/Santuario';
import Consultas from './pages/Consultas';

const PageComponent: React.FC<{ page: Page }> = ({ page }) => {
    switch (page) {
        case 'home': return <HomePage />;
        case 'jornada': return <JornadaFlorescer />;
        case 'compendio': return <CompendioSincretico />;
        case 'herbario': return <HerbarioSazonal />;
        case 'cristais': return <GuiaDeCristais />;
        case 'sopros': return <SoprosDeVida />;
        case 'roda-do-ano': return <RodaDoAno />;
        case 'sigilos': return <ForjadorDeSigilos />;
        case 'panteao': return <Panteao />;
        case 'galeria': return <GaleriaOnirica />;
        case 'guardiao': return <Guardiao />;
        case 'santuario': return <Santuario />;
        case 'consultas': return <Consultas />;
        default: return <HomePage />;
    }
};

const App: React.FC = () => {
    const [activePage, setActivePage] = useState<Page>('home');
    const [isSidebarOpen, setSidebarOpen] = useState<boolean>(false);
    const [isMuted, setIsMuted] = useState<boolean>(true);
    const audioRef = useRef<HTMLAudioElement>(null);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.muted = isMuted;
            if (!isMuted) {
                // Autoplay might be blocked, this is best-effort.
                audioRef.current.play().catch(e => console.warn("Audio playback was prevented by the browser."));
            }
        }
    }, [isMuted]);

    const handleSetPage = useCallback((page: Page) => {
        const contentArea = document.querySelector('.book-page-content');
        if (contentArea) {
            contentArea.scrollTop = 0;
        }
        setActivePage(page);
        setSidebarOpen(false); // Close sidebar on mobile after selection
    }, []);

    const toggleMute = () => {
        setIsMuted(current => !current);
    };

    return (
        <>
            <StarrySky />
            
            <audio ref={audioRef} loop>
                {/* 
                  IMPORTANTE: Substitua o 'src' abaixo por uma URL pública e funcional 
                  do áudio "Duo des fleurs (Dueto das Flores)".
                  Exemplo do Wikimedia Commons (verifique a licença antes de usar):
                  https://upload.wikimedia.org/wikipedia/commons/2/21/Leo_Delibes_-_Flower_Duet_from_Lakme.ogg
                */}
                <source src="" type="audio/mpeg" />
                Seu navegador não suporta o elemento de áudio.
            </audio>

            <button 
                onClick={() => setSidebarOpen(!isSidebarOpen)} 
                className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg text-white bg-slate-900/50 backdrop-blur-md border border-white/10"
                aria-label="Toggle menu"
            >
                <i className="ph ph-list text-2xl"></i>
            </button>

            <Sidebar
                navigationData={NAVIGATION_DATA}
                activePage={activePage}
                setActivePage={handleSetPage}
                isOpen={isSidebarOpen}
                setIsOpen={setSidebarOpen}
            />

            <main
                id="main-content"
                className="main-content h-screen overflow-y-auto p-4 md:p-6 lg:p-8 pt-20 lg:pt-8 transition-all duration-300 ease-in-out lg:ml-72 flex items-center justify-center"
            >
                <div className="w-full max-w-4xl bg-[#FBF6E8]/95 rounded-lg shadow-2xl shadow-black/50 border-2 border-amber-900/30 h-full max-h-[calc(100vh-2rem)] md:max-h-[calc(100vh-3rem)] lg:max-h-[calc(100vh-4rem)] flex flex-col">
                     <div className="book-page-content flex-grow overflow-y-auto">
                        <div key={activePage} className="animate-page-turn">
                            <PageComponent page={activePage} />
                        </div>
                    </div>
                </div>
            </main>
            
            <button
                onClick={toggleMute}
                className="fixed bottom-4 right-4 z-50 p-3 rounded-full text-white bg-slate-900/50 backdrop-blur-md border border-white/10 hover:bg-slate-900 transition-colors"
                aria-label={isMuted ? "Ativar som" : "Desativar som"}
                title={isMuted ? "Ativar som" : "Desativar som"}
            >
                <i className={`ph text-2xl ${isMuted ? 'ph-speaker-slash' : 'ph-speaker-high'}`}></i>
            </button>
        </>
    );
};

export default App;