import React from 'react'

import IssueItem from '../issueItem/issueItem.component';

export default function IssueList(props) {

    const getIssueList = (issues) => {
        if(issues)
        return issues.map((issue) => {
            return (<IssueItem issue={issue}></IssueItem>)
        });
    };

    return (
        <div>
            {getIssueList(props.issues)}
        </div>
    )
}
