import React from 'react'
import {connect} from "react-redux";
import Components from "../components";

const { RepositoryList, Header} = Components;

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        
    };
}

const mapStateToProps = (state, ownProps) => {
    return {
        repositories: state.Repository,
        login: state.login,
    };
}


function IssuesPage(props) {
    return (
        <div>
            <Header></Header>
            <RepositoryList repositories={props.repositories}></RepositoryList>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(IssuesPage)