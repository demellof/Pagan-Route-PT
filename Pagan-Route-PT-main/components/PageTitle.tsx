
import React from 'react';

interface PageTitleProps {
    title: string;
    subtitle: string;
    gradient?: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ title, subtitle, gradient = 'from-purple-400 to-cyan-400' }) => {
    return (
        <header className="mb-8">
            <h1 className={`brand-title text-4xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r ${gradient}`}>
                {title}
            </h1>
            <p className="text-lg text-gray-400">{subtitle}</p>
        </header>
    );
};

export default PageTitle;
