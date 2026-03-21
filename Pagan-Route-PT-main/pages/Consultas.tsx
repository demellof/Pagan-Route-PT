
import React from 'react';
import ContentCard from '../components/ContentCard';
import PageTitle from '../components/PageTitle';

const Consultas: React.FC = () => {
    return (
        <div>
            <PageTitle title="Consultas" subtitle="Agende um atendimento individual." />
            <ContentCard>
                <p className="text-center">Em breve: informações sobre os tipos de consulta oferecidos, valores e um sistema para agendamento.</p>
            </ContentCard>
        </div>
    );
};

export default Consultas;
