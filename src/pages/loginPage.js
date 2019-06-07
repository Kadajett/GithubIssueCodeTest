import React, { Component } from 'react';

import Components from "../components/index";
import {loginAttempt} from "../redux/actions/ActionCreators";
import { connect } from 'react-redux';
const {ApiKey, ButtonGeneral, RepositoryList, Header} = Components;

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        loginAttempt: (token) => {
            dispatch(loginAttempt(token));
        },
    };
}

const mapStateToProps = (state, ownProps) => {
    return {
        repositories: state.Repository,
        login: state.login,
    };
}

class LoginPage extends Component {
    constructor(props) {
        super(props);

        this.clickLogin = this.clickLogin.bind(this);
        this.onApiKeyChange = this.onApiKeyChange.bind(this);
        this.state = {
            apiKey: '',
        };
    }

    clickLogin() {
        this.props.loginAttempt(this.state.apiKey);
    }
    
    onApiKeyChange(e) {
        this.setState({...this.state, apiKey: e.target.value});
    }

    render() {
        return (
        <div>
            <Header></Header>
            <ApiKey changeWatcher={this.onApiKeyChange}></ApiKey>
            <ButtonGeneral onClick={this.clickLogin}></ButtonGeneral>
            <RepositoryList repositories={this.props.repositories}></RepositoryList>
        </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)

