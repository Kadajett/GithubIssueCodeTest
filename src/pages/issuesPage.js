import React from 'react'
import {connect} from "react-redux";
import Components from "../components";


import { RepositoryReturnButton, IssuesRepositoryWrapper } from "./page.style";
import IssueListContainer from '../components/issueList/index';

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
                <IssueListContainer issues={props.repositories.repoID.issues.edges}></IssueListContainer>
            }
            <IssuesRepositoryWrapper>
                <RepositoryList showOnMobile={false} repositories={props.repositories}></RepositoryList>
            </IssuesRepositoryWrapper>
            
            <RepositoryReturnButton>Repository List</RepositoryReturnButton>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(IssuesPage)