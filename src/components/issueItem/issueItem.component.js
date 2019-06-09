import React from 'react'
import moment from "moment";
import {IssueWrapper, IssueTitle, IssueCreatedAt, IssueAssigneeWrapper, IssueLeftContent, IssueRightContent} from "./issue.style";
import AvatarIcon from '../avatarIcon';



export default function IssueItem(props) {
    // This needs to be moved into a util...
    const getDaysSince = (time) => {
        let days = moment().diff(time, 'days');
        if(days > 365) {
            return moment().diff(time, 'years') + " Years Ago";
        }
        return days + " Days Ago";
    }

    const getAssignee = () => {
        if(!props.issue.node.assignees.nodes[0]) return null;

        return props.issue.node.assignees.nodes[0];
    }

    return (
        <IssueWrapper>
            <IssueLeftContent>
                <IssueTitle>
                    {props.issue.node.title}
                </IssueTitle>
                <IssueCreatedAt>
                    Created {getDaysSince(props.issue.node.createdAt)}
                </IssueCreatedAt>
            </IssueLeftContent>
            <IssueRightContent>
                {getAssignee() && (
                    <IssueAssigneeWrapper>
                        {/* {JSON.stringify()} */}
                        <AvatarIcon imgSrc={getAssignee().avatarUrl}></AvatarIcon>
                    </IssueAssigneeWrapper>
                )
                }
            </IssueRightContent>
        </IssueWrapper>
    )
}
