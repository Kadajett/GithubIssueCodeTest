import ActionTypes from "../actions/ActionTypes";
const {
    GET_REPOSITORY_SUCCESS,
    SET_SELECTED_REPOSITORY,
} = ActionTypes;



export default function RepositoryReducer(state = [], action) {
    switch(action.type) {
        case GET_REPOSITORY_SUCCESS:
            return {...state, list: action.repositories}
        case SET_SELECTED_REPOSITORY:
            return {...state, repoID: action.repoId};
        default:
            return state;
    }
}