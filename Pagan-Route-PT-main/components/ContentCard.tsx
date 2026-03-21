
import React from 'react';

interface ContentCardProps {
    children: React.ReactNode;
    className?: string;
}

const ContentCard: React.FC<ContentCardProps> = ({ children, className = '' }) => {
    return (
        <div className={`bg-slate-900/50 backdrop-blur-lg border border-white/10 rounded-xl p-6 mb-6 ${className}`}>
            {children}
        </div>
    );
};

export default ContentCard;
