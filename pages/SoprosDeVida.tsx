
import React from 'react';
import ContentCard from '../components/ContentCard';
import PageTitle from '../components/PageTitle';

const SoprosDeVida: React.FC = () => {
    return (
        <div>
            <PageTitle title="Sopros de Vida" subtitle="Guia de Pranayamas por Nível de Proficiência." gradient="from-sky-300 to-blue-400" />

            <ContentCard>
                <h2 className="text-2xl font-bold mb-4 text-green-400">Nível 1: Fundacional (Iniciante)</h2>
                <div className="mb-3">
                    <h3 className="text-lg font-semibold text-white">Dirga Pranayama (Respiração Completa)</h3>
                    <p className="text-sm"><strong>Efeito:</strong> Calmante/Base. Ensina o uso total da capacidade pulmonar.</p>
                </div>
                <div className="mb-3">
                    <h3 className="text-lg font-semibold text-white">Ujjayi Pranayama (Respiração Vitoriosa)</h3>
                    <p className="text-sm"><strong>Efeito:</strong> Aquecedora/Foco. Cria um som suave na garganta, acalmando a mente.</p>
                </div>
            </ContentCard>
             <ContentCard>
                <h2 className="text-2xl font-bold mb-4 text-yellow-400">Nível 2: Energizante (Intermediário)</h2>
                <div className="mb-3">
                    <h3 className="text-lg font-semibold text-white">Nadi Shodhana (Respiração das Narinas Alternadas)</h3>
                    <p className="text-sm"><strong>Efeito:</strong> Equilibrante. Harmoniza os hemisférios cerebrais, acalma e foca.</p>
                </div>
            </ContentCard>
        </div>
    );
};

export default SoprosDeVida;
