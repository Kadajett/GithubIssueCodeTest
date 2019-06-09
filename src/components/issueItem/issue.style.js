import styled from "styled-components";

export const IssueLeftContent = styled.div`
    flex: 1;
`;

export const IssueRightContent = styled.div`
    flex: 1;
`;

export const IssueWrapper = styled.div`
    height: 48px;
    padding: 16px;
    display: flex;
    &:hover {
        background-color: #DFDFDFDF;
    }
`;

export const IssueTitle = styled.div`
    font-size: 16px;
    
`;

export const IssueCreatedAt = styled.div`
    margin-top: 5px;
    
`;

export const IssueAssigneeWrapper = styled.div`
    float: right;
    img {
        height: 40px;
        width: 40px;
    }
`;