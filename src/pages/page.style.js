import styled from "styled-components";

import { device } from "../utils/styles";

export const LoginFlexWrapper = styled.div`
    max-height: 60vh !important;
`;

export const IssuesRepositoryWrapper = styled.div`
    @media ${device.mobileL} {
        display: block;
        width: 48vw;
        float: left;
        height: 95vh;
    }
`;

export const RepositoryReturnButton = styled.button`

    position: fixed;
    width: 100vw;
    height: 38px;
    bottom: 0px;
    background-color: #DFDFDF;

    @media ${device.mobileL} {
        display: none;
        
    }
`;