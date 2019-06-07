import ActionTypes from "../actions/ActionTypes";
const {
    GET_REPOSITORY_SUCCESS,
} = ActionTypes;



export default function RepositoryReducer(state = [], action) {
    switch(action.type) {
        case GET_REPOSITORY_SUCCESS:
            return {...state, list: action.repositories}
        default:
            return state;
    }
}