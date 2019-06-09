import styled from "styled-components";
import {device} from "../../utils/styles";

export const RepositoryListScrollWrapper = styled.div`
    overflow: hidden;
    overflow-y: scroll;
    height: 62vh;
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

export const RepositoryListWrapper = styled.div`
    padding-left: 10px;
    @media ${device.mobileS} {
        display: ${props => props.showOnMobile ? "block" : "none"};
    }
    @media ${device.mobileL} {
        display: block;
    }

    

`;