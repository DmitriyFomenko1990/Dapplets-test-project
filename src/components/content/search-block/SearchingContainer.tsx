import Searching from "./Searching";
import {fetchDapplets} from "../../../store/action-creator";
import React from "react";
import {connect} from "react-redux";

class SearchingContainer extends React.Component {

    render() {
        return <Searching { ...this.props} fetchDapplets={fetchDapplets} />
    }
}
const mapStateToPtops = () => {
    return {

    }
}

export default connect( mapStateToPtops, {fetchDapplets})(Searching)