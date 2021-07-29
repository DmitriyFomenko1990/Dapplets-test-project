import Searching from "./Searching";
import {dispatchSort, fetchDapplets, dispatchFilter, dispatchCurrentPage} from "../../../store/action-creators";
import React from "react";
import {connect} from "react-redux";

export class SearchingContainer extends React.Component {
    render() {
        return <Searching { ...this.props} dispatchCurrentPage={dispatchCurrentPage} dispatchFilter={dispatchFilter} dispatchSort={dispatchSort} fetchDapplets={fetchDapplets} />
    }
}
const mapStateToProps = () => {
    return {

    }
}

export default connect( mapStateToProps, {dispatchSort, fetchDapplets, dispatchFilter, dispatchCurrentPage})(Searching)