import React, {useState} from 'react';
import style from './application.module.scss'
import TagsBlock from "../../../tags-block/TagsBlock";
import DescriptionSection from "./description/description-section/DescriptionSection";
import {DappletType} from "../../../../store/redux/dappletsReducerTypes";

// TODO: animation for desc

interface ApplicationType {
    dapplet: DappletType;
    isOpenSideBar: boolean;
}

const Application: React.FC<ApplicationType> = ({dapplet, isOpenSideBar}) => {
    const address = dapplet.address
    const shortAddress = address.slice(0, 5)+'......'+address.slice(-5)
    const TagArray = [
        {isCommunity: false, title: 'Social Media'},
        {isCommunity: false, title: 'Finances'},
        {isCommunity: false, title: 'Twitter'},
        {isCommunity: true, title: 'Top 100'},
    ];
    const [isDropped, setIsDropped] = useState(false);
    const onHandleClick = () =>{
        return setIsDropped(!isDropped);
    }
    return (
        <div className={style.wrapper}>
            <div className={style.headBlock} onClick={onHandleClick}>
                <button className={style.burgerBtn}>
                    <span className={style.burger} />
                </button>
                <img className={style.logo} src={` https://dapplets-hiring-api.herokuapp.com/api/v1/files/${dapplet.icon}`} alt={'log'} />
                <div className={isOpenSideBar
                    ? style.titleBlock_short
                    : style.titleBlock}>
                    <h4>{dapplet.title}</h4>
                    {isOpenSideBar
                    ? <p className={style.addressShort}>{shortAddress}</p>
                    : <p className={style.address}>{dapplet.address}</p>
                    }
                </div>
                <p className={style.description}>{dapplet.description}</p>
                <p className={style.source}>{dapplet.author}</p>
                <div className={style.tags}>
                    <TagsBlock tagsArray={TagArray} margin='0 4px 10px 0'/>
                </div>
                <button className={style.installBtn}>Install</button>
            </div>
            <article className={isDropped ? style.descriptionWrapper : `${style.descriptionWrapper_hidden} ${style.descriptionWrapper}`}>
                <div className={style.space} />
                <div className={style.firstDescriptionBlock}>
                    <DescriptionSection title='Aliquam sit' description={dapplet.text_1} />
                </div>
                <div  className={style.secondDescriptionBlock}>
                    <DescriptionSection title='Semper neque' description={dapplet.text_2} />
                    <DescriptionSection title='Leo ipsum.' description={dapplet.text_3} />
                    <DescriptionSection title='Elit sagittis et.' description={dapplet.text_4} />
                </div>
                <div  className={style.thirdDescriptionBlock}>
                    <DescriptionSection title='Aliquam.' description={dapplet.text_5} />
                    <DescriptionSection title='In euismod.' description={dapplet.text_6} />
                    <DescriptionSection title='Justo amet.' description={dapplet.text_7} />
                </div>
                <div  className={style.fourthDescriptionBlock}>
                    <DescriptionSection title='Urna.' description={dapplet.text_8} />
                    <DescriptionSection title='Nam diam.' description={dapplet.text_9} />
                </div>
            </article>
        </div>
    );
};

export default Application;