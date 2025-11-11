import React, { useState } from 'react';
import ContentCard from '../components/ContentCard';
import PageTitle from '../components/PageTitle';

// --- Dados Detalhados para cada Conceito ---
const conceptData: Record<string, { title: string; content: string[] }> = {
    'pilar-terra': { 
        title: 'Pilar da Terra: O Corpo', 
        content: [
            "O Pilar da Terra representa nosso fundamento, nosso corpo físico e nossa conexão com o mundo material. É a base sobre a qual toda a jornada espiritual é construída.",
            "Trabalhar este pilar envolve práticas de aterramento (grounding), cuidado com a saúde, nutrição consciente e o reconhecimento do corpo como um templo sagrado, e não como um mero veículo."
        ] 
    },
    'pilar-luz': { 
        title: 'Pilar da Luz: A Percepção', 
        content: [
            "O Pilar da Luz governa nossa capacidade de ver com clareza, tanto no mundo exterior quanto no interior. É a sede da intuição, da sabedoria e da auto-observação neutra.",
            "Desenvolver este pilar significa aprender a distinguir entre a realidade e as projeções da mente, confiando na intuição e buscando a verdade para além das aparências."
        ] 
    },
    'chakra-muladhara': { 
        title: 'Chakra Muladhara: A Raiz', 
        content: [
            "Localizado na base da coluna, o Muladhara é nosso centro de segurança, estabilidade e sobrevivência. É a nossa conexão com a energia da Terra e com nossas necessidades mais básicas.",
            "Um Muladhara equilibrado nos dá a sensação de pertencimento e a confiança para construir uma vida estável. Desequilíbrios podem gerar medo, ansiedade e instabilidade."
        ] 
    },
    'chakra-ajna': { 
        title: 'Chakra Ajna: O Terceiro Olho', 
        content: [
            "Localizado entre as sobrancelhas, o Ajna é o centro da intuição, da percepção extrassensorial e da sabedoria. É o 'olho da alma', que nos permite ver além do véu da ilusão.",
            "Quando o Ajna está ativo e equilibrado, nossa capacidade de visualização, clareza mental e conexão com o Eu Superior são ampliadas."
        ]
    },
     'arquetipo-perseu': {
        title: "Arquétipo: Perseu & Medusa",
        content: [
            "Este mito simboliza o confronto com a sombra paralisante (Medusa) através da sabedoria e da estratégia (o escudo espelhado de Atena), em vez da força bruta.",
            "Perseu representa a coragem de olhar para nossos medos e padrões petrificados de forma indireta, usando a auto-observação (o espelho) para transformar o que nos assombra em poder."
        ]
    },
    'ferramenta-ancoragem': {
        title: "Ferramenta: Ancoragem (Grounding)",
        content: [
            "Ancoragem é a prática de conectar conscientemente sua energia à energia da Terra. Isso traz estabilidade, acalma a mente e dissipa o excesso de energia mental ou emocional.",
            "Métodos simples incluem andar descalço na grama, visualizar raízes crescendo de seus pés para o centro da Terra ou segurar um cristal de aterramento como a Turmalina Negra."
        ]
    }
};

// FIX: Explicitly type journeyStepsData to aid TypeScript's inference.
interface JourneyConcept {
    id: string;
    name: string;
}

interface JourneyStepData {
    title: string;
    focus: string;
    colorClass: string;
    concepts: Record<string, JourneyConcept[]>;
}

// --- Estrutura da Jornada com links para os conceitos ---
const journeyStepsData: JourneyStepData[] = [
    {
        title: "Etapa 1: Despertar da Consciência",
        focus: "Foco: Clareza, auto-observação neutra, mapeamento de hábitos.",
        colorClass: "text-muladhara",
        concepts: {
            "Pilares": [{ id: 'pilar-terra', name: 'Terra (Corpo)' }, { id: 'pilar-luz', name: 'Luz (Percepção)' }],
            "Chakras": [{ id: 'chakra-muladhara', name: 'Muladhara (Raiz)' }, { id: 'chakra-ajna', name: 'Ajna (Frontal)' }],
            "Arquétipos": [{ id: 'arquetipo-perseu', name: 'Perseu & Medusa' }],
            "Ferramentas": [{ id: 'ferramenta-ancoragem', name: 'Ancoragem' }, { id: 'ferramenta-lua-nova', name: 'Lua Nova' }]
        }
    },
    {
        title: "Etapa 2: Semeando com Propósito",
        focus: "Foco: Alinhar desejos com valores, encontrar o 'porquê' profundo.",
        colorClass: "text-svadhisthana",
        concepts: {
            "Pilares": [{ id: 'pilar-agua', name: 'Água (Emoções)' }, { id: 'pilar-ar', name: 'Ar (Coração)' }],
            "Chakras": [{ id: 'chakra-svadhisthana', name: 'Svadhisthana (Sacral)' }, { id: 'chakra-anahata', name: 'Anahata (Cardíaco)' }],
            "Arquétipos": [{ id: 'arquetipo-isis', name: 'Ísis' }, { id: 'arquetipo-apolo', name: 'Apolo' }],
            "Ferramentas": [{ id: 'ferramenta-visualizacao', name: 'Visualização' }, { id: 'ferramenta-lua-crescente', name: 'Lua Crescente' }]
        }
    },
    {
        title: "Etapa 3: Transformação Resiliente",
        focus: "Foco: Confronto ativo com padrões, mobilização da força de vontade.",
        colorClass: "text-manipura",
        concepts: {
            "Pilares": [{ id: 'pilar-fogo', name: 'Fogo (Ação)' }],
            "Chakras": [{ id: 'chakra-manipura', name: 'Manipura (Plexo Solar)' }],
            "Arquétipos": [{ id: 'arquetipo-teseu', name: 'Teseu & Minotauro' }, { id: 'arquetipo-sekhmet', name: 'Sekhmet' }],
            "Ferramentas": [{ id: 'ferramenta-reestruturacao', name: 'Reestruturação Cognitiva' }, { id: 'ferramenta-lua-cheia', name: 'Lua Cheia' }]
        }
    },
    {
        title: "Etapa 4: Colheita Consciente",
        focus: "Foco: Integração, gratidão, solidificar novos hábitos, amor-próprio.",
        colorClass: "text-anahata",
        concepts: {
            "Pilares": [{ id: 'pilar-ar', name: 'Ar (Coração)' }],
            "Chakras": [{ id: 'chakra-anahata', name: 'Anahata (Cardíaco)' }],
            "Arquétipos": [{ id: 'arquetipo-demeter', name: 'Deméter' }],
            "Ferramentas": [{ id: 'ferramenta-gratidao', name: 'Diário de Gratidão' }, { id: 'ferramenta-lua-minguante', name: 'Lua Minguante' }]
        }
    },
    {
        title: "Etapa 5: Irradiando o Legado",
        focus: "Foco: Compartilhar a sabedoria adquirida, expressão autêntica da verdade pessoal.",
        colorClass: "text-vishuddha",
        concepts: {
            "Pilares": [{ id: 'pilar-som', name: 'Som (Verdade)' }],
            "Chakras": [{ id: 'chakra-vishuddha', name: 'Vishuddha (Laríngeo)' }],
            "Arquétipos": [{ id: 'arquetipo-hermes', name: 'Hermes' }],
            "Ferramentas": [{ id: 'ferramenta-comunicacao', name: 'Comunicação Não-Violenta' }]
        }
    },
     {
        title: "Etapa 6: Introspecção Curativa",
        focus: "Foco: Mergulho profundo na sombra para curar padrões recorrentes com sabedoria.",
        colorClass: "text-ajna",
        concepts: {
            "Pilares": [{ id: 'pilar-luz', name: 'Luz (Percepção)' }],
            "Chakras": [{ id: 'chakra-ajna', name: 'Ajna (Frontal)' }],
            "Arquétipos": [{ id: 'arquetipo-hecate', name: 'Hécate' }, { id: 'arquetipo-inanna', name: 'Inanna' }],
            "Ferramentas": [{ id: 'ferramenta-shadow-work', name: 'Shadow Work' }]
        }
    },
    {
        title: "Etapa 7: União Transcendental",
        focus: "Foco: Experiência da unidade, transcendência do ego, consciência pura.",
        colorClass: "text-sahasrara",
        concepts: {
            "Pilares": [{ id: 'pilar-mente', name: 'Mente (Infinito)' }],
            "Chakras": [{ id: 'chakra-sahasrara', name: 'Sahasrara (Coronário)' }],
            "Arquétipos": [{ id: 'arquetipo-oroboros', name: 'Ouroboros' }],
            "Ferramentas": [{ id: 'ferramenta-meditacao', name: 'Meditação Silenciosa' }]
        }
    },
];

interface JourneyStepProps {
    title: string;
    focus: string;
    colorClass: string;
    concepts: Record<string, JourneyConcept[]>;
    onSelectConcept: (id: string) => void;
}

const JourneyStep: React.FC<JourneyStepProps> = ({ title, focus, colorClass, concepts, onSelectConcept }) => {
    const ConceptLink: React.FC<{ concept: JourneyConcept }> = ({ concept }) => (
        <button 
            onClick={() => onSelectConcept(concept.id)}
            className="font-serif italic underline decoration-dotted decoration-amber-800/50 hover:decoration-solid hover:text-amber-800 transition-colors duration-200"
        >
            {concept.name}
        </button>
    );

    return (
        <ContentCard className="bg-transparent border-none p-0">
             <div className="border-l-4 pl-6" style={{ borderColor: 'rgba(120, 53, 15, 0.4)' }}>
                <h2 className={`font-serif text-3xl font-bold mb-2 ${colorClass}`}>{title}</h2>
                <p className="mb-4 text-slate-600 italic">{focus}</p>
                <div className="space-y-3 text-slate-700">
                    {/* FIX: Cast Object.entries to the correct type to fix TS error on `items`. */}
                    {(Object.entries(concepts) as [string, JourneyConcept[]][]).map(([category, items]) => (
                        <div key={category}>
                            <strong className="text-amber-900 font-bold">{category}:</strong>{' '}
                            {items.map((item, index) => (
                                <React.Fragment key={item.id}>
                                    <ConceptLink concept={item} />
                                    {index < items.length - 1 && ' & '}
                                </React.Fragment>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </ContentCard>
    );
};


const ConceptDetail: React.FC<{ conceptId: string; onBack: () => void; }> = ({ conceptId, onBack }) => {
    const concept = conceptData[conceptId] ?? { title: "Conceito não encontrado", content: ["Por favor, volte e tente novamente."] };

    return (
         <div className="text-gray-800 font-serif p-8 md:p-12 animate-fade-in">
             <style>{`
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in {
                    animation: fade-in 0.5s ease-out forwards;
                }
            `}</style>
            <button 
                onClick={onBack}
                className="flex items-center gap-2 mb-8 text-amber-800 hover:text-amber-950 transition-colors duration-200 font-bold"
            >
                <i className="ph ph-arrow-left"></i>
                Voltar à Jornada
            </button>
            <h2 className="brand-title text-4xl mb-6 text-slate-800">{concept.title}</h2>
            <div className="space-y-4 text-lg leading-relaxed text-justify">
                {concept.content.map((paragraph, index) => (
                    <p key={index} className="indent-8">{paragraph}</p>
                ))}
            </div>
        </div>
    );
};


const JornadaFlorescer: React.FC = () => {
    const [activeConceptId, setActiveConceptId] = useState<string | null>(null);

    const handleSelectConcept = (id: string) => {
        const contentArea = document.querySelector('.book-page-content');
        if (contentArea) {
            contentArea.scrollTop = 0;
        }
        setActiveConceptId(id);
    };

    const handleBackToList = () => {
        setActiveConceptId(null);
    };

    if (activeConceptId) {
        return <ConceptDetail conceptId={activeConceptId} onBack={handleBackToList} />;
    }

    return (
        <div className="text-gray-800 font-serif p-8 md:p-12">
            <PageTitle title="Jornada Florescer" subtitle="As 7 Etapas da Jornada para Domar a Fera Interior." />
            <div className="space-y-12">
                {journeyStepsData.map(step => (
                    <JourneyStep
                        key={step.title}
                        title={step.title}
                        focus={step.focus}
                        colorClass={step.colorClass}
                        concepts={step.concepts}
                        onSelectConcept={handleSelectConcept}
                    />
                ))}
            </div>
        </div>
    );
};

export default JornadaFlorescer;