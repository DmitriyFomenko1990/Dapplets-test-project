import React from 'react';

interface DescriptionSectionProps{
    title: string;
    description: string
}
const DescriptionSection: React.FC<DescriptionSectionProps> = ({title,description}) => {
    return (
        <section>
            <h6>{title}</h6>
            <p>{description}</p>
        </section>
    );
};

export default DescriptionSection;