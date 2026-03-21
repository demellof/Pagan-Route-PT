
import React from 'react';

interface SectionTitleProps {
    children: React.ReactNode;
    borderColorClass?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children, borderColorClass = 'border-gray-500' }) => {
    return (
        <h3 className={`text-xl font-semibold text-white mt-6 mb-3 pb-1 border-b-2 ${borderColorClass}`}>
            {children}
        </h3>
    );
};

export default SectionTitle;
