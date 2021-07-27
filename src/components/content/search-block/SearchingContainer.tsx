import Searching from "./Searching";
import {fetchDapplets, setFilter, setSort} from "../../../store/action-creators";
import React from "react";
import {connect} from "react-redux";

export class SearchingContainer extends React.Component {
    render() {
        return <Searching { ...this.props} setFilter={setFilter} setSort={setSort} fetchDapplets={fetchDapplets} />
    }
}
const mapStateToProps = () => {
    return {

    }
}

export default connect( mapStateToProps, {setSort, fetchDapplets, setFilter})(Searching)