import styled from "styled-components";
import { device } from '../../utils/styles';


export const ApiKeyWrapper = styled.div`
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
export const ApiKeyInput = styled.input`
    font-color: #442B2D;
    background-color: #F1EBEA;
    -webkit-appearance: none; 
    box-shadow: none !important;
    @media ${device.mobileS} {
        height: 56px;
        font-size: 16px;
        text-align: center;
        width: 90vw;
        margin-top: 20px;
    }
`;