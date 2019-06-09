import ActionTypes from "../actions/ActionTypes";
import { takeLatest, call, put } from "redux-saga/effects";
import { loginSuccess, loginFailure, getRepositoryAttempt, getRepositorySuccess, getRepositoryFailure } from '../actions/ActionCreators';
import Github from "../../utils/github";
import { gql } from "apollo-boost";

const {
    LOGIN_ATTEMPT,
    GET_REPOSITORY_ATTEMPT,
} = ActionTypes;

function getRepos() {
    return Github().query({
        query: gql`
          { 
            rateLimit {
                cost
                remaining
                resetAt
            }
            viewer {
                repositories( last:100) {
                    nodes {
                        name
                        id
                        createdAt
                        issues(last:100) {
                            edges {
                              node {
                                id
                                title
                                createdAt
                                comments(first:100) {
                                    nodes {
                                        author {
                                            login
                                        }
                                    }
                                }
                                assignees(first: 20) {
                                  nodes {
                                    name
                                    id
                                    avatarUrl
                                  }
                                }
                              }
                            }
                        }
                        openGraphImageUrl
                    }
                    
                  }
            }
          }
        `
      }); 
}

function apiLogin(token) {
    Github(token);
    
    return Github().query({
        query: gql`
          { 
            rateLimit {
                cost
                remaining
                resetAt
            }
            viewer {
                login
                name
                avatarUrl
            }
          }
        `
      }); 
}

export function* watchLoginAttemptSaga() {
    yield takeLatest(LOGIN_ATTEMPT, loginAttemptSaga);
}
// @TODO: remove this
// GithubToken 63fb43f9f2e78980dcad553562f5e40d9946259d


// This is purpose built for the login page. That is why we are grabbing the repositories as well. 
// I will have a repository specific 


function* loginAttemptSaga(token) {
    try {
        const login = yield call(apiLogin, token.apiKey);
        
        // const data = response.data.message;
        yield put(loginSuccess(login.data.viewer));
        
        const repos = yield call(getRepos);
        let values = Object.values(repos.data.viewer.repositories.nodes);
        yield put(getRepositorySuccess(values));
    } catch(e) {
        console.error(e);
        yield put(loginFailure(e))
    }
}

export function* watchGetReposSaga() {
    yield takeLatest(GET_REPOSITORY_ATTEMPT, getReposAttemptSaga);
}

function* getReposAttemptSaga() {
    try {
        const response = yield call(getRepos);
        
        const data = response.data;
    } catch(e) {
        console.error(e);
        yield put(getRepositoryFailure(e))
    }
}