
import React from 'react';
import ContentCard from '../components/ContentCard';
import PageTitle from '../components/PageTitle';

const HerbarioSazonal: React.FC = () => {
    return (
        <div>
            <PageTitle title="Herbário Sazonal" subtitle="Um guia sincrético de ervas encontradas no Brasil, organizadas por bioma." gradient="from-green-400 to-emerald-500" />
            
            <ContentCard>
                <h2 className="text-2xl font-bold mb-4 text-green-400">Bioma: Mata Atlântica</h2>
                <div className="mb-4">
                    <h3 className="text-lg font-semibold text-white">Arruda (Ruta graveolens)</h3>
                    <div className="bg-slate-900/70 border-l-4 border-gray-400 p-4 rounded-md mt-2 text-sm">
                        <strong>Uso Tradicional (Sincrético):</strong> A grande erva de proteção e banimento. Usada em banhos de descarrego.
                        <br/><strong>Uso Científico (Fitoterápico):</strong> Contém Rutina. Propriedades anti-inflamatórias. <strong>Atenção:</strong> Tóxica em altas doses.
                    </div>
                </div>
                 <div className="mb-4">
                    <h3 className="text-lg font-semibold text-white">Guiné (Petiveria alliacea)</h3>
                     <div className="bg-slate-900/70 border-l-4 border-gray-400 p-4 rounded-md mt-2 text-sm">
                        <strong>Uso Tradicional (Sincrético):</strong> Poderosa para quebrar demandas e energias negativas. Usada em defumações.
                        <br/><strong>Uso Científico (Fitoterápico):</strong> Estudos apontam para atividades antimicrobianas e anti-inflamatórias.
                    </div>
                </div>
            </ContentCard>
        </div>
    );
};

export default HerbarioSazonal;
