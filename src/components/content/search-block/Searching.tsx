import React from "react";
import style from "./searching.module.scss"
import search from "../../../img/content/searching.svg"
import Dropdown from "react-dropdown";
import "./dropdown.scss";
import { debounce } from "lodash"

interface SearchingProps {
    dispatchCurrentPage: any;
    dispatchFilter: any
    fetchDapplets: any;
    dispatchSort: any;
    props?: any;
}

interface SearchingState {
    selected?: string;
    value?: string;
}

class Searching extends React.Component<SearchingProps, SearchingState> {
    constructor (props: SearchingProps) {
        super(props)
        this.state = {
            selected: '',
            value: '',
        }
        this._onSelect = this._onSelect.bind(this);
        this.onHandleChange = this.onHandleChange.bind(this);
    }

    delayedCall = debounce((value: string) => {
        this.props.dispatchCurrentPage(0);
        this.props.dispatchFilter(value);
    }, 1000)

    onHandleChange (e:React.FormEvent<HTMLInputElement>) {
        this.setState({value: e.currentTarget.value});
        this.delayedCall(e.currentTarget.value);
    }

    _onSelect (option: any) {
        this.props.dispatchCurrentPage(0);
        this.props.dispatchSort(option.value);
    }
    render() {
    const value = this.state.value;
    const options = [
        {value: 'DESC', label: 'Descending'},
        {value: 'ASC', label: 'Ascending'}
    ];
    const defaultOption = options[0];

    return (
        <div className={style.wrapper}>
            <div className={style.searchBlock}>
                <img className={style.searchImg} src={search} alt={' '} />
                <input className={style.searchInput} value={value} placeholder={'Search'}
                       type='text' onChange={this.onHandleChange}/>
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