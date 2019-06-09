import styled from "styled-components";
import {device, font} from "../../utils/styles";

export const ControlWrapper = styled.div`
    float: right;
`;

export const ListHeaderWrapper = styled.div`
    margin-top: 20px;
    margin-bottom: 20px;
    padding-right: 10px;
`;

export const ListHeader = styled.span`
    display: inline-block;
    font-size: ${font.large};
`;

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