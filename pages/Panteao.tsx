
import React from 'react';
import ContentCard from '../components/ContentCard';
import PageTitle from '../components/PageTitle';

const Panteao: React.FC = () => {
    return (
        <div>
            <PageTitle title="O Panteão" subtitle="Honrando os Guardiões, Arquétipos e Forças que inspiram este Grimório." gradient="from-purple-400 to-amber-300" />
            
            <div className="grid md:grid-cols-2 gap-6">
                <ContentCard>
                    <h2 className="text-2xl font-bold mb-2 text-green-400">Pã: O Espírito Indomado</h2>
                    <p>Patrono do <strong>Pilar da Terra</strong> e do <strong>Herbário Sazonal</strong>.</p>
                </ContentCard>
                <ContentCard>
                    <h2 className="text-2xl font-bold mb-2 text-indigo-300">Hécate: A Guardiã</h2>
                    <p>Patrona da <strong>Roda do Ano</strong> e do <strong>Pilar da Luz</strong> (Intuição).</p>
                </ContentCard>
                <ContentCard>
                    <h2 className="text-2xl font-bold mb-2 text-rose-400">Eros: O Grande Conciliador</h2>
                    <p>Patrono do <strong>Pilar do Ar/Coração</strong> e da "Jornada Florescer".</p>
                </ContentCard>
                <ContentCard>
                    <h2 className="text-2xl font-bold mb-2 text-gray-300">As Parcas: As Tecelãs</h2>
                    <p>Supervisoras da <strong>Jornada Florescer</strong> como um todo.</p>
                </ContentCard>
                <ContentCard>
                    <h2 className="text-2xl font-bold mb-2 text-purple-300">Aradia: A Sábia Mestra</h2>
                    <p>A alma deste <strong>Grimório Virtual</strong>.</p>
                </ContentCard>
                <ContentCard>
                    <h2 className="text-2xl font-bold mb-2 text-cyan-400">Cosme e Damião</h2>
                    <p>Abençoam o <strong>Compêndio Sincrético</strong>, unindo o ritual e a fitoterapia.</p>
                </ContentCard>
            </div>
        </div>
    );
};

export default Panteao;
