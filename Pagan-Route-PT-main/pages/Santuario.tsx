
import React from 'react';
import ContentCard from '../components/ContentCard';
import PageTitle from '../components/PageTitle';

const Santuario: React.FC = () => {
    return (
        <div>
            <PageTitle title="Santuário" subtitle="Um espaço para práticas e meditações guiadas." />
            <ContentCard>
                <p className="text-center">Em breve: um espaço sagrado com meditações guiadas, trilhas sonoras para rituais e práticas interativas.</p>
            </ContentCard>
        </div>
    );
};

export default Santuario;
