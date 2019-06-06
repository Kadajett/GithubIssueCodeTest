import ActionTypes from './ActionTypes';

const {
    LOGIN_ATTEMPT,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    GET_ISSUES_ATTEMPT,
    GET_ISSUES_SUCCESS,
    GET_ISSUES_FAILURE,
    GET_REPOSITORY_ATTEMPT,
    GET_REPOSITORY_SUCCESS,
    GET_REPOSITORY_FAILURE,
    SET_ISSUE_ORDER,
    SET_SELECTED_REPOSITORY,
} = ActionTypes;


export function loginAttempt(apiKey) {
    return {
        type: LOGIN_ATTEMPT,
        apiKey
    };
}

export function loginSuccess(token) {
    return {
        type: LOGIN_SUCCESS,
        token
    };
}

export function loginFailure() {
    return {
        type: LOGIN_FAILURE
    };
}

export function getIssuesAttempt(repositoryId) {
    return {
        type: GET_ISSUES_ATTEMPT,
        repositoryId
    };
}

export function getIssuesSuccess(issues) {
    return {
        type: GET_ISSUES_SUCCESS,
        issues
    };
}

export function getIssuesFailure() {
    return {
        type: GET_ISSUES_FAILURE
    };
}

export function getRepositoryAttempt() {
    return {
        type: GET_REPOSITORY_ATTEMPT
    };
}

export function getRepositorySuccess(repositories) {
    return {
        type: GET_REPOSITORY_SUCCESS,
        repositories
    };
}

export function getRepositoryFailure() {
    return {
        type: GET_REPOSITORY_FAILURE
    };
}

export function setIssueOrder(orderBy) {
    return {
        type: SET_ISSUE_ORDER,
        orderBy
    };
}

export function setSelectedRepository(repoId) {
    return {
        type: SET_SELECTED_REPOSITORY,
        repoId
    };
}