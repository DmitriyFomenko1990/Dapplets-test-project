import Search from "./Search";
import {
    dispatchSort,
    fetchDapplets,
    dispatchFilter,
    dispatchCurrentPage,
    dispatchDapplets
} from "../../../store/action-creators";
import React from "react";
import {connect} from "react-redux";

export class SearchContainer extends React.Component {
    render() {
        return <Search { ...this.props} dispatchDapplets={dispatchDapplets} dispatchCurrentPage={dispatchCurrentPage} dispatchFilter={dispatchFilter} dispatchSort={dispatchSort} fetchDapplets={fetchDapplets} />
    }
}
const mapStateToProps = () => {
    return {

    }
}

export default connect( mapStateToProps,
    {dispatchSort, fetchDapplets, dispatchFilter, dispatchCurrentPage, dispatchDapplets})(Search)