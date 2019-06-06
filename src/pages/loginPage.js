import React, { Component } from 'react';

import Components from "../components/index";
const {ApiKey, ButtonGeneral, RepositoryList, Header} = Components;

export default class LoginPage extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <ApiKey></ApiKey>
        <ButtonGeneral></ButtonGeneral>
        <RepositoryList></RepositoryList>
      </div>
    )
  }
}

