import React, {SyntheticEvent, useState} from 'react';
import style from './application.module.scss'
import TagsBlock from "../../../tags-block/TagsBlock";
import DescriptionSection from "./description/description-section/DescriptionSection";
import {DappletType} from "../../../../store/redux/dappletsReducerTypes";
import errorImg from "../../../../img/error-img.png"
import Collapsible from 'react-collapsible';

// TODO: animation for desc
interface ApplicationType {
    dapplet: DappletType;
    isOpenSideBar: boolean;
}

const Application: React.FC<ApplicationType> = ({dapplet, isOpenSideBar}) => {
    if (dapplet.title.length > 20 ) {
        dapplet.title = dapplet.title.slice(0, 25 ) + '...'
    }
    const address = dapplet.address;
    const [src, setSrc] = useState<string>(` https://dapplets-hiring-api.herokuapp.com/api/v1/files/${dapplet.icon}`)
    const shortAddress = address.slice(0, 5)+'......'+address.slice(-5)
    const TagArray = [
        {isCommunity: false, title: 'Social Media'},
        {isCommunity: false, title: 'Finances'},
        {isCommunity: false, title: 'Twitter'},
        {isCommunity: true, title: 'Top 100'},
    ];
    const [isDropped, setIsDropped] = useState(false);
    const [installStatus, setInstallStatus] = useState('Install');
    const onHandleClick = () => {
        return setIsDropped(!isDropped);
    };
    const onError = (e:SyntheticEvent<HTMLDivElement>) => {
        setSrc(errorImg)
    }
    const onInstall = (e:React.MouseEvent) => {
        e.stopPropagation()
        if (localStorage.getItem(dapplet.id) === null) {
            localStorage.setItem(dapplet.id, 'INSTALLED');
            setInstallStatus('INSTALLED');
        }
    };
    const onUninstall = () =>{
        if (localStorage.getItem(dapplet.id) === 'INSTALLED') {
            localStorage.setItem(dapplet.id, 'UNINSTALLED');
            setInstallStatus('UNINSTALLED');
        }
    };
    return (

        <div className={style.wrapper}>
                    <Collapsible trigger={
                        <div className={style.headBlock} onClick={onHandleClick}>
                        <button className={style.burgerBtn}>
                            <span className={style.burger} />
                        </button>
                        <div className={style.titleWrapper}>
                            <img className={style.logo} onError={onError}
                                 src={src}
                                 alt={'log'}/>
                            <div className={isOpenSideBar
                                ? style.titleBlock_short
                                : style.titleBlock}>
                                <h4>{dapplet.title}</h4>
                                {isOpenSideBar
                                    ? <p className={style.addressShort}>{shortAddress}</p>
                                    : <p className={style.address}>{dapplet.address}</p>
                                }
                                <p className={style.mobileSource}>{dapplet.author}</p>
                            </div>
                        </div>
                        <p className={isOpenSideBar
                            ? style.description_short
                            : style.description}>
                            {dapplet.description}</p>
                        <p className={style.source}>{dapplet.author}
                        </p>
                        <div className={style.tags}>
                            <TagsBlock tagsArray={TagArray} margin='0 4px 10px 0'/>
                        </div>
                        <button className={style.installBtn} onClick={onInstall} onMouseEnter={onUninstall}>
                            {
                                localStorage.getItem(dapplet.id)
                                    ? localStorage.getItem(dapplet.id)
                                    : installStatus
                            }

                        </button>
                        </div>}
                    >
                        <article className={style.descriptionWrapper}>
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
                    </Collapsible>
        </div>

    );
};

export default Application;