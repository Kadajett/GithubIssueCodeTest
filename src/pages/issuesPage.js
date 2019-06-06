import React from 'react'

import Components from "../components";

const {RepositoryList, IssueList, AvatarIcon} = Components;

export default function IssuesPage(props) {
    return (
        <div>
            <RepositoryList></RepositoryList>
            <RepositoryList></RepositoryList>
            <IssueList></IssueList>
            <AvatarIcon></AvatarIcon>
        </div>
    )
}
