import styled from "styled-components";
import {device} from "../../utils/styles";

export const IssueListScrollWrapper = styled.div`
    overflow-x: hidden;
    overflow-y: scroll;
    height: 84vh;
    ::-webkit-scrollbar {
        width: 10px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background: #f1f1f1; 
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: #888; 
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: #555; 
    }
`;

export const IssueListWrapper = styled.div`
    padding-left: 10px;
    @media ${device.mobileS}{
        height: 50vh;
    }
    @media ${device.mobileL} {
        width: 50vw;
        float: right;
        height: 95vh;
    }
`;