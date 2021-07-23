import React, {useState} from 'react';
import style from './create-input.module.scss'

interface CreateInputProps{
    title: string,
    placeholder: string
}
const CreateInput: React.FC<CreateInputProps> = ({title,placeholder}) => {
    const [inputValue, setInputValue] = useState(placeholder)

    const onHandleChange = (e: React.FormEvent<HTMLInputElement>) => {
        return setInputValue(e.currentTarget.value)
    };

    const onBtnClick = (e: React.MouseEvent) => {
        e.preventDefault()
        return setInputValue(placeholder)
    };
    return (
        <div className={style.wrapper}>
            <h5 className={style.title}>{title}</h5>
            <form>
                <div className={style.formWrapper}>
                    <input className={style.input}
                            value={inputValue}
                            onChange={onHandleChange}/>
                    <button  className={style.formBtn}
                                onClick={onBtnClick}>
                        Create
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateInput;