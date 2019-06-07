import React from 'react'

import { NavBar } from './header.style';
import AvatarWrapper from "../avatarIcon";
import history from "history";
import {
    withRouter
  } from 'react-router-dom'

export default withRouter(function Header(props) {
    const routeToApiKeyScreen = () => {
        props.history.push('/')
    };
    return (
        <NavBar>
            <div onClick={routeToApiKeyScreen}>
                <AvatarWrapper></AvatarWrapper>
            </div>
        </NavBar>
    )
});
