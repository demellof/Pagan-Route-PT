
import React from 'react';
import ContentCard from '../components/ContentCard';
import PageTitle from '../components/PageTitle';

const PlaceholderImg: React.FC<{ alt: string; text: string; }> = ({ alt, text }) => (
    <div className="w-full h-48 rounded-lg mt-2 opacity-75 bg-slate-800 border-2 border-dashed border-gray-500 text-gray-300 flex items-center justify-center text-center p-4 font-['Cinzel']" aria-label={alt}>
        {text}
    </div>
);


const GaleriaOnirica: React.FC = () => {
    return (
        <div>
            <PageTitle title="Galeria Onírica" subtitle="A Arte da Percepção: Conectando o Surrealismo à Jornada Interior." gradient="from-blue-300 to-pink-400" />
            
            <ContentCard>
                <h2 className="text-2xl font-bold mb-4 text-blue-300">René Magritte: O Mapa Não é o Território</h2>
                <p className="mb-4">Uma lição direta do <strong>Pilar da Luz (Percepção)</strong>. Magritte nos ensina que a <em>representação</em> de uma coisa não é a coisa em si. Nosso grimório busca nos dar o poder de redesenhar nossos mapas mentais.</p>
                <PlaceholderImg alt="Representação Onírica de Magritte" text="Representação Onírica de Magritte" />
            </ContentCard>
            
            <ContentCard>
                <h2 className="text-2xl font-bold mb-4 text-yellow-400">Salvador Dalí: A Fluidez do Tempo</h2>
                <p className="mb-4">Uma exploração visual do <strong>Pilar da Mente (Finito & Infinito)</strong>. Dalí pintou a <em>experiência psicológica</em> do tempo, não o tempo do relógio. Nosso grimório é uma ferramenta para aprender a navegar nesse tempo interior.</p>
                 <PlaceholderImg alt="Representação Onírica de Dalí" text="Representação Onírica de Dalí" />
            </ContentCard>
        </div>
    );
};

export default GaleriaOnirica;
