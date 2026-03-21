import React from 'react';

const HomePage: React.FC = () => {
    return (
        <div className="text-gray-800 font-serif p-8 md:p-12 animate-fade-in">
            <style>{`
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in {
                    animation: fade-in 0.8s ease-out forwards;
                }
            `}</style>
            <h1 className="brand-title text-5xl text-center mb-6 text-slate-800">
                Rota Pagã
            </h1>
            <p className="text-lg leading-relaxed mb-6 text-justify indent-8">
                Bem-vindo ao Rota Pagã, um repositório vivo de conhecimento místico e prático. Este não é apenas um site, mas um grimório digital interativo, um santuário para a alma que busca se reconectar com os ciclos da natureza, a sabedoria ancestral e o poder transformador que reside em seu interior.
            </p>
            <p className="text-lg leading-relaxed mb-6 text-justify indent-8">
                Aqui, a jornada é o destino. Cada seção é uma trilha, cada ferramenta um convite para a autoexploração. Navegue pelas páginas, absorva o conhecimento e, acima de tudo, aplique-o. Que este espaço sirva como sua bússola, seu oráculo e seu espelho.
            </p>
            <p className="text-lg leading-relaxed text-center italic mt-8 text-slate-600">
                Cada 'livro' na prateleira à esquerda abre um portal para um pilar diferente da sua jornada. Escolha um volume e comece a sua exploração.
            </p>
        </div>
    );
};

export default HomePage;
