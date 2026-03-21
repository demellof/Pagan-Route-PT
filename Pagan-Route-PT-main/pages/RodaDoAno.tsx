
import React from 'react';
import ContentCard from '../components/ContentCard';
import PageTitle from '../components/PageTitle';

const RodaDoAno: React.FC = () => {
    return (
        <div>
            <PageTitle title="A Roda do Ano" subtitle="Alinhando sua jornada com os ciclos Solares (Sabbaths) e Lunares (Esbats)." gradient="from-yellow-400 to-orange-500" />

            <ContentCard>
                <h2 className="text-2xl font-bold mb-4 text-yellow-300">Calendário Solar (Sabbaths - Hemisfério Sul)</h2>
                <p className="mb-4 text-sm">Os Sabbaths marcam a jornada do Sol. Datas para o Hemisfério Sul.</p>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-slate-900/70 border-l-4 border-gray-400 p-4 rounded-md">
                        <h3 className="text-lg font-semibold text-white">Litha (Solstício de Verão - Aprox. 21 de Dez.)</h3>
                        <p className="text-sm"><strong>Tema:</strong> Solar Máximo. Pico de luz, energia e abundância.</p>
                    </div>
                    <div className="bg-slate-900/70 border-l-4 border-gray-400 p-4 rounded-md">
                        <h3 className="text-lg font-semibold text-white">Yule (Solstício de Inverno - Aprox. 21 de Junho)</h3>
                        <p className="text-sm"><strong>Tema:</strong> Solar Mínimo. A noite mais longa. Renascimento da Luz.</p>
                    </div>
                </div>
            </ContentCard>
            <ContentCard>
                <h2 className="text-2xl font-bold mb-4 text-cyan-300">Calendário Lunar (Esbats)</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="bg-slate-900/70 border-l-4 border-gray-300 p-4 rounded-md">
                        <h3 className="text-lg font-semibold text-white">Lua Nova</h3>
                        <p className="text-sm"><strong>Energia:</strong> Início, Vazio Fértil. <br/><strong>Alinhamento:</strong> "Etapa 1: Despertar". Plantar intenções.</p>
                    </div>
                    <div className="bg-slate-900/70 border-l-4 border-gray-300 p-4 rounded-md">
                        <h3 className="text-lg font-semibold text-white">Lua Crescente</h3>
                        <p className="text-sm"><strong>Energia:</strong> Crescimento, Ação. <br/><strong>Alinhamento:</strong> "Etapa 2 & 3". Agir com propósito.</p>
                    </div>
                </div>
            </ContentCard>
        </div>
    );
};

export default RodaDoAno;
