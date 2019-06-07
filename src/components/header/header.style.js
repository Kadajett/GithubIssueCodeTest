import styled from 'styled-components';
import {device} from "../../utils/styles";

export const NavBar = styled.nav`
    overflow: hidden;
    background-color: #333333;
    padding: 5px 10px;
    color: white;
    display: flex;
    flex-direction: row;
    align-items: center;
    
    @media ${device.mobileM} { 
        height: 5vh;
    }

    @media ${device.laptop} {
        height: 7vh;
    }


`;