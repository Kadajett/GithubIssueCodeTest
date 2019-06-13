import React, {useState, useEffect} from 'react';
import moment from "moment";

import IssueItem from '../issueItem/issueItem.component';
import { IssueListWrapper, IssueListScrollWrapper, ControlWrapper, ListHeader, ListHeaderWrapper } from "./issueList.style";
// import { FaBeer } from 'react-icons/fa';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';


export default function IssueList(props) {

    const [issues, setIssues] = useState();

    const options = [
        'Newest', 
        'Oldest', 
        'Most Commented',
        'Least Commented',
        'Recently Updated',
        'Least Recently Updated',
        'Most Reactions',
    ];
    let defaultOption = null;
    useEffect(() => {
        props.refreshRepos();
    }, []);

    useEffect(() => {
        // defaultOption = props.order;
        // // debugger;
        
        sortIssues(props.issues, props.order);
    }, [props.order]);

    function sortIssues(issues, sortBy) {
        console.log("Sorting Issues By: ", sortBy);
        switch(sortBy) {
            case 'Newest':
                let newIssues = sortByNewest(issues);
                setIssues(newIssues)
                break;
            case 'Oldest':
                setIssues(sortByOldest(issues))
                break;
            case 'Most Commented':
                setIssues(sortByMostCommented(issues))
                break;
            case 'Least Commented':
                setIssues(sortByLeastCommented(issues))
                break;
            case 'Recently Updated':
                setIssues(sortByRecentlyUpdated(issues))
                break;
            case 'Least Recently Updated':
                setIssues(sortByLeastRecentlyUpdated(issues))
                break;
            case 'Most Reactions':
                setIssues(sortByNewest(issues))
                break;
            default:
                setIssues(issues);
                break;
        } 
    }

    // THis is going to be very verbose. I am sure there
    // is a better way to do this, but I am jet lagged.

    function sortByNewest(issues) {
        return issues.sort((a, b) => {
            let aDiff = moment().diff(a.node.createdAt, 'hours');
            let bDiff = moment().diff(b.node.createdAt, 'hours');
            return aDiff - bDiff;
        });
    }
    function sortByOldest(issues) {
        return issues.sort((a, b) => {
            let aDiff = moment().diff(a.node.createdAt, 'hours');
            let bDiff = moment().diff(b.node.createdAt, 'hours');
            return bDiff - aDiff;
        });
    }
    function sortByMostCommented(issues) {
        return issues.sort((a, b) => {
            let aLength = a.node.comments.nodes.length;
            let bLength = b.node.comments.nodes.length;
            return bLength - aLength;
        });
    }
    function sortByLeastCommented(issues) {
        return issues.sort((a, b) => {
            let aDiff = moment().diff(a.node.createdAt, 'hours');
            let bDiff = moment().diff(b.node.createdAt, 'hours');
            return aDiff - bDiff;
        });
    }
    function sortByRecentlyUpdated(issues) {
        return issues.sort((a, b) => {
            let aDiff = moment().diff(a.node.createdAt, 'hours');
            let bDiff = moment().diff(b.node.createdAt, 'hours');
            return aDiff - bDiff;
        });
    }
    function sortByLeastRecentlyUpdated(issues) {
        return issues.sort((a, b) => {
            let aDiff = moment().diff(a.node.createdAt, 'hours');
            let bDiff = moment().diff(b.node.createdAt, 'hours');
            return aDiff - bDiff;
        });
    }
    function sortByMostReactions(issues) {
        return issues.sort((a, b) => {
            let aDiff = moment().diff(a.node.createdAt, 'hours');
            let bDiff = moment().diff(b.node.createdAt, 'hours');
            return aDiff - bDiff;
        });
    }

    

    const getIssueList = (issues) => {
        if(issues)
        return issues.map((issue) => {
            return (<IssueItem issue={issue}></IssueItem>)
        });
    };

    const selectOrderBy = (choice) => {
        // setIssueOrder
        console.log(props);
        props.setIssueOrder(choice.value);
    }

    return (
        <IssueListWrapper>
            <ListHeaderWrapper>
                <ListHeader>Issue List</ListHeader>
                <ControlWrapper>
                    <Dropdown options={options} onChange={selectOrderBy} value={props.order} placeholder="Select an option" />
                </ControlWrapper>
            </ListHeaderWrapper>
            
            <IssueListScrollWrapper>
                {getIssueList(issues)}
            </IssueListScrollWrapper>
        </IssueListWrapper>
    )
}
