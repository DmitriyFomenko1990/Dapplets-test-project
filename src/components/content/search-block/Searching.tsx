import React, {ChangeEvent, Component} from 'react';
import style from './searching.module.scss'
import search from '../../../img/content/searching.svg'
import Dropdown from 'react-dropdown';
import './dropdown.scss';
import {fetchDapplets} from "../../../store/action-creator";


class Searching extends Component<any> {
    constructor (props: any) {
        super(props)
        this.state = {
            selected: ''
        }
        this._onSelect = this._onSelect.bind(this)
    }

    _onSelect (option: any) {
        this.props.fetchDapplets(0, 20,'privacy', option.value);

    }
    render() {
    const options = [
        {value: 'DESC', label: 'Descending'},
        {value: 'ASC', label: 'Ascending'}
    ];
    const defaultOption = options[0];

    return (
        <div className={style.wrapper}>
            <div className={style.searchBlock}>
                <img className={style.searchImg} src={search} alt={' '} />
                <input className={style.searchInput} value={'Search'}
                       type='text'/>
            </div>
            <Dropdown options={options} onChange={this._onSelect}  value={defaultOption} placeholder="Select an option"
                      placeholderClassName ='myPlaceholderClassName'
                      arrowClassName='myArrowClassName'
                      menuClassName='myMenuClassName'/>
        </div>
    );
};
};
export default Searching;