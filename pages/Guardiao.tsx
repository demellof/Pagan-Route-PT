
import React from 'react';
import ContentCard from '../components/ContentCard';
import PageTitle from '../components/PageTitle';

const Guardiao: React.FC = () => {
    return (
        <div>
            <PageTitle title="Guardião" subtitle="Informações sobre o guardião deste santuário." />
            <ContentCard>
                <p className="text-center">Esta página pode conter sua biografia, filosofia de trabalho e como você guia os outros na Jornada Florescer.</p>
                <p className="text-center mt-4 text-lg text-cyan-300">leandromellof@gmail.com</p>
            </ContentCard>
        </div>
    );
};

export default Guardiao;
