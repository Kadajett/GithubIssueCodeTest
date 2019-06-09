import styled from "styled-components";

import {devices} from "../../utils/styles"

export const ButtonGeneralWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    input:focus,
    select:focus,
    textarea:focus,
    button:focus {
        outline: none;
    }
`;

export const ButtonGeneral = styled.button`
    height: 36px;
    background-color: #CFD8DC;
    margin-top: 20px;
    margin-bottom: 20px;
`;