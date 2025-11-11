
import React, { useState, useCallback } from 'react';
import ContentCard from '../components/ContentCard';
import PageTitle from '../components/PageTitle';
import SectionTitle from '../components/SectionTitle';
import { generateMantra } from '../services/geminiService';

const PlaceholderImg: React.FC<{ alt: string; text: string; }> = ({ alt, text }) => (
    <div className="w-full h-48 rounded-lg mt-2 opacity-75 bg-slate-800 border-2 border-dashed border-gray-500 text-gray-300 flex items-center justify-center text-center p-4 font-['Cinzel']" aria-label={alt}>
        {text}
    </div>
);

const ForjadorDeSigilos: React.FC = () => {
    const [intention, setIntention] = useState<string>('');
    const [mantra, setMantra] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    const handleGenerateMantra = useCallback(async () => {
        if (!intention.trim()) {
            setError("Por favor, escreva sua intenção.");
            return;
        }
        setIsLoading(true);
        setError('');
        setMantra('');
        const result = await generateMantra(intention);
        if (result.startsWith("Houve um erro") || result.startsWith("API Key")) {
            setError(result);
        } else {
            setMantra(result);
        }
        setIsLoading(false);
    }, [intention]);

    return (
        <div>
            <PageTitle 
                title="O Forjador de Sigilos" 
                subtitle="Um Guia Visual Prático para Manifestar Intenção."
                gradient="from-cyan-400 to-emerald-400"
            />
            
            <ContentCard>
                 <h2 className="text-2xl font-bold mb-4 text-white">Forja de Mantra com IA</h2>
                 <p className="text-sm mb-4 text-gray-300">Concentre-se em sua vontade. Escreva sua intenção no campo abaixo e o oráculo digital forjará um mantra de poder para carregar seu sigilo.</p>
                 <div className="flex flex-col sm:flex-row gap-4">
                    <input
                        type="text"
                        value={intention}
                        onChange={(e) => setIntention(e.target.value)}
                        placeholder="Ex: EU TENHO ABUNDANCIA E FARTURA"
                        className="flex-grow bg-slate-800 border border-purple-500/50 rounded-lg p-3 text-white focus:ring-2 focus:ring-purple-400 focus:outline-none transition"
                        disabled={isLoading}
                    />
                    <button 
                        onClick={handleGenerateMantra}
                        disabled={isLoading}
                        className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-bold py-3 px-6 rounded-lg hover:from-purple-600 hover:to-cyan-600 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                    >
                         {isLoading ? (
                            <>
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Forjando...
                            </>
                        ) : "Forjar Mantra"}
                    </button>
                 </div>
                 {error && <p className="text-red-400 mt-3 text-sm">{error}</p>}
                 {mantra && (
                     <div className="mt-6 p-4 border border-emerald-500/50 bg-emerald-900/30 rounded-lg">
                         <p className="text-sm text-emerald-300 mb-2">Seu mantra de poder:</p>
                         <p className="text-xl italic font-semibold text-white text-center">"{mantra}"</p>
                     </div>
                 )}
            </ContentCard>

            <ContentCard>
                <h2 className="text-2xl font-bold mb-4 text-white">O que é um Sigilo?</h2>
                <p>Um sigilo é um símbolo mágico criado para representar uma intenção específica. O objetivo é destilar um desejo complexo em um glifo abstrato, que age como um "comando" visual, programando seu subconsciente para manifestar essa intenção.</p>
            </ContentCard>

            <ContentCard>
                <h2 className="text-2xl font-bold mb-4 text-white">Método 1: A Vontade Abstrata (Magia Psicológica / PNL)</h2>
                <p className="mb-4 text-sm">Este método foca em criar um símbolo, carregá-lo intensamente e depois esquecê-lo. Perfeito para <strong>mudança de hábitos</strong>.</p>
                <div className="space-y-6">
                    <div>
                        <h3 className="text-lg font-semibold text-cyan-300">Passo 1: A Intenção</h3>
                        <p className="text-sm">Escreva seu desejo como uma afirmação clara, no tempo presente, sem negativos.</p>
                        <p className="text-lg italic p-4 bg-gray-900 rounded-lg mt-2 font-mono">"EU TENHO ABUNDANCIA E FARTURA"</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-cyan-300">Passo 2: A Redução</h3>
                        <p className="text-sm">Remova todas as vogais e letras repetidas.</p>
                        <p className="text-sm mt-2 font-mono">T N H B D C F R</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-cyan-300">Passo 3: A Criação</h3>
                        <p className="text-sm">Combine as letras restantes em um único símbolo gráfico abstrato.</p>
                        <PlaceholderImg alt="Visual do Glifo Abstrato" text="Visual do Glifo Abstrato (TNHBDCFR)" />
                    </div>
                </div>
            </ContentCard>

            <ContentCard>
                <h2 className="text-2xl font-bold mb-4 text-white">Método 2: O Pantáculo Cerimonial (Magia Planetária)</h2>
                <p className="mb-4 text-sm">Este método cria um talismã persistente, alinhado com as forças planetárias. Perfeito para <strong>Abundância e Fartura</strong>.</p>
                <div className="space-y-6">
                    <div>
                        <h3 className="text-lg font-semibold text-yellow-300">Passo 1: Intenção e Alinhamento</h3>
                        <p className="text-sm">Defina a intenção (Abundância) e escolha o planeta regente (Júpiter para expansão).</p>
                    </div>
                     <div>
                        <h3 className="text-lg font-semibold text-yellow-300">Passo 2: A Consagração</h3>
                        <p className="text-sm">O poder vem da correspondência. Para Júpiter:</p>
                        <ul className="list-disc list-inside text-sm mt-2 ml-4 space-y-1">
                            <li><strong>Dia:</strong> Quinta-feira</li>
                            <li><strong>Cor:</strong> Azul ou Roxo</li>
                            <li><strong>Incenso:</strong> Sândalo ou Cedro</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-yellow-300">Passo 3: A Ativação</h3>
                        <p className="text-sm">Carregue o sigilo em ritual e guarde-o como um talismã, sem destruí-lo.</p>
                        <PlaceholderImg alt="Sigilo em Altar Cerimonial" text="Sigilo em Altar com Vela Azul, Ametista e Incenso" />
                    </div>
                </div>
            </ContentCard>
        </div>
    );
};

export default ForjadorDeSigilos;
