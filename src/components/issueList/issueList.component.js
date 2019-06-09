import React from 'react'

import IssueItem from '../issueItem/issueItem.component';
import {IssueListWrapper, IssueListScrollWrapper} from "./issueList.style";

export default function IssueList(props) {

    const getIssueList = (issues) => {
        if(issues)
        return issues.map((issue) => {
            return (<IssueItem issue={issue}></IssueItem>)
        });
    };

    return (
        <IssueListWrapper>
            <h2>Issue List</h2>
            <IssueListScrollWrapper>
                {getIssueList(props.issues)}
            </IssueListScrollWrapper>
        </IssueListWrapper>
    )
}
