import React, {useState} from "react";
import style from "./application.module.scss";
import DescriptionSection from "./description/description-section/DescriptionSection";
import {DappletType} from "../../../../store/redux/dappletsReducerTypes";
import errorImg from "../../../../img/error-img.png";
import Collapsible from "react-collapsible";
import Tag from "../../../tag/Tag";

interface ApplicationType {
    dapplet: DappletType;
    isOpenSideBar: boolean;
}
const Application: React.FC<ApplicationType> = ({dapplet, isOpenSideBar}) => {

    const address = dapplet.address;
    const [src, setSrc] = useState<string>(` https://dapplets-hiring-api.herokuapp.com/api/v1/files/${dapplet.icon}`);
    const shortAddress = address.slice(0, 5)+'......'+address.slice(-5);

    let mobileBtnStyle = style.mobileInstallBtn
    let BtnStyle = style.installBtn
    let initialBtnStatus = 'INSTALL'

    if (localStorage.getItem(dapplet.id) === 'INSTALLED') {
        mobileBtnStyle = `${style.mobileInstallBtn} ${style.mobileInstallBtn_installed}`
        BtnStyle = `${style.installBtn}  ${style.installBtn_installed}`
        initialBtnStatus = 'INSTALLED'
    }

    const [isDropped, setIsDropped] = useState(false);
    const [btnStatus, setBtnStatus] = useState(initialBtnStatus);
    const onHandleClick = () => {
        return setIsDropped(!isDropped);
    };
    const onError = () => {
        setSrc(errorImg);
    }

    const onInstall = (e:React.MouseEvent) => {
        e.stopPropagation();
        if (localStorage.getItem(dapplet.id) === null) {
            localStorage.setItem(dapplet.id, 'INSTALLED');
            mobileBtnStyle = `${style.mobileInstallBtn} ${style.mobileInstallBtn_installed}`
            BtnStyle = `${style.installBtn}  ${style.installBtn_installed}`
            setBtnStatus('INSTALLED');
        }
    };
    const onHover = () =>{
        if (localStorage.getItem(dapplet.id) === 'INSTALLED') {
            setBtnStatus('UNINSTALLED');
        }
    };
    const onLeave = () =>{
        if (localStorage.getItem(dapplet.id) === 'INSTALLED') {
            setBtnStatus('INSTALLED');
        }
    };

    return (
        <div className={style.wrapper}>
                    <Collapsible trigger={
                        <div className={style.headBlock} onClick={onHandleClick}>
                            <button className={style.burgerBtn}>
                                <span className={style.burger} />
                            </button>
                            <div className={isOpenSideBar
                                ? style.headWrapper_short
                                : style.headWrapper}>
                                <div className={style.titleWrapper}>
                                    <img className={style.logo} onError={onError}
                                         src={src}
                                         alt={'log'}/>
                                    <div className={isOpenSideBar
                                        ? style.titleBlock_short
                                        : style.titleBlock}>
                                        <h4 className={style.title}>{dapplet.title}</h4>
                                        <p className={style.address}>
                                            {isOpenSideBar
                                                ? shortAddress
                                                : address
                                            }
                                        </p>
                                        <p className={style.mobileSource}>{dapplet.author}</p>
                                    </div>
                                </div>

                                <button className={mobileBtnStyle} onClick={onInstall} />
                            </div>
                            <div className={isOpenSideBar
                                ? `${style.description_short} ${style.description}`
                                : style.description}>
                                <p>{dapplet.description}</p>
                            </div  >

                            <p className={style.source}>{dapplet.author}
                            </p>
                            <div className={style.tags}>
                                <Tag tag='Social Media' isCommunity={false} />
                                <Tag tag='Finances' isCommunity={false} />
                                <Tag tag='Twitter' isCommunity={false} />
                                <Tag tag='Top 100' isCommunity={true} />
                            </div>
                            <div className={style.btnInstallWrapper}>
                                <button className={BtnStyle} onClick={onInstall} onMouseEnter={onHover}
                                        onMouseLeave={onLeave}>
                                    {btnStatus}
                                </button>
                            </div>
                        </div>
                    }>
                        <article className={isOpenSideBar
                            ? `${style.descriptionWrapper} ${style.descriptionWrapper_less}`
                            : style.descriptionWrapper}>
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