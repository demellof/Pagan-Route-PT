
import React from 'react';
import ContentCard from '../components/ContentCard';
import PageTitle from '../components/PageTitle';

const CompendioSincretico: React.FC = () => {
    return (
        <div>
            <PageTitle title="Compêndio Sincrético" subtitle="Correspondências práticas de Ervas, Cristais e Rituais para os 7 Pilares." gradient="from-teal-300 to-sky-400" />
            
            <ContentCard>
                <h2 className="text-2xl font-bold mb-3 text-muladhara">1. Muladhara (Raiz): Aterramento</h2>
                <p className="text-sm mt-3"><strong>Ritual:</strong> Banho de Descarrego (Sal Grosso + Arruda) para limpeza e aterramento.</p>
            </ContentCard>
            <ContentCard>
                <h2 className="text-2xl font-bold mb-3 text-svadhisthana">2. Svadhisthana (Sacral): Fluidez</h2>
                <p className="text-sm mt-3"><strong>Ritual:</strong> Chá de Camomila e Erva-Cidreira para acalmar as "águas" emocionais.</p>
            </ContentCard>
            <ContentCard>
                <h2 className="text-2xl font-bold mb-3 text-manipura">3. Manipura (Plexo Solar): Vontade</h2>
                <p className="text-sm mt-3"><strong>Ritual:</strong> Chá de Alecrim com Canela pela manhã para foco e energia.</p>
            </ContentCard>
             <ContentCard>
                <h2 className="text-2xl font-bold mb-3 text-anahata">4. Anahata (Cardíaco): Amor</h2>
                <p className="text-sm mt-3"><strong>Ritual:</strong> Utilizar Quartzo Rosa no peito durante meditações para abrir o coração.</p>
            </ContentCard>
        </div>
    );
};

export default CompendioSincretico;
