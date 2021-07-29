import React from "react";
import style from "./description-section.module.scss";

interface DescriptionSectionProps{
    title: string;
    description: string;
}
const DescriptionSection: React.FC<DescriptionSectionProps> = ({title,description}) => {
    return (
        <section>
            <h6 className={style.title}>{title}</h6>
            <p>{description}</p>
        </section>
    );
};

export default DescriptionSection;