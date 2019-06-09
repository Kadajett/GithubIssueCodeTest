import React from 'react'
import {connect} from "react-redux";
import Components from "../components";
import IssueList from '../components/issueList/issueList.component';

import { RepositoryReturnButton } from "./page.style";

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
            
            {props.repositories.repoID && 
                <IssueList issues={props.repositories.repoID.issues.edges}></IssueList>
            }
            <RepositoryList showOnMobile={false} repositories={props.repositories}></RepositoryList>
            <RepositoryReturnButton>Repository List</RepositoryReturnButton>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(IssuesPage)