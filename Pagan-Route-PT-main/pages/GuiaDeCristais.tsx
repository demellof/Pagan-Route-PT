
import React from 'react';
import ContentCard from '../components/ContentCard';
import PageTitle from '../components/PageTitle';
import SectionTitle from '../components/SectionTitle';

const GuiaDeCristais: React.FC = () => {
    return (
        <div>
            <PageTitle title="Guia de Cristais" subtitle="Aprimorando o uso, limpeza e programação das suas ferramentas minerais." gradient="from-purple-300 to-indigo-400"/>
            
            <ContentCard>
                <h2 className="text-2xl font-bold mb-4 text-white">1. A Prática: Como Usar Cristais</h2>
                
                <SectionTitle borderColorClass="border-ajna">Passo 1: Limpeza Energética</SectionTitle>
                <p className="mb-3">Cristais absorvem energia. Antes de usar, limpe-os.</p>
                <ul className="list-disc list-inside space-y-2 text-sm">
                    <li><strong>Defumação:</strong> Passe na fumaça de Sálvia, Palo Santo ou Olíbano. (Método universal).</li>
                    <li><strong>Selenita:</strong> Deixe o cristal sobre uma placa de Selenita.</li>
                </ul>
                <div className="bg-orange-950/70 border-l-4 border-orange-500 text-orange-200 p-4 rounded-md mt-4 text-sm">
                    <strong>Cuidado:</strong> Não molhe Selenita, Pirita, Cianita. Na dúvida, use Defumação.
                </div>

                <SectionTitle borderColorClass="border-manipura">Passo 2: Energização</SectionTitle>
                <ul className="list-disc list-inside space-y-2 text-sm">
                    <li><strong>Luz da Lua (Cheia):</strong> Ideal para pedras de Intuição (Ametista, Quartzo Rosa).</li>
                    <li><strong>Luz do Sol (manhã):</strong> Ideal para pedras de Ação (Citrino, Pirita).</li>
                </ul>

                <SectionTitle borderColorClass="border-sahasrara">Passo 3: Programação (Intenção)</SectionTitle>
                <p className="text-sm">Segure o cristal limpo. Respire fundo e conecte-se com ele. Diga em voz alta sua intenção. Ex: "Eu programo esta Ametista para acalmar minha mente e abrir minha intuição."</p>
            </ContentCard>
        </div>
    );
};

export default GuiaDeCristais;
