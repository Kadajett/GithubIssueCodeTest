import ActionTypes from "../actions/ActionTypes";
const {
    LOGIN_SUCCESS,
} = ActionTypes;

const initialState = {
    login: null,
    name: null,
};

export default function LoginReducer(state = initialState, action) {
    switch(action.type) {
        case LOGIN_SUCCESS:
            return {...state, ...action.data}
        default:
            return state;
    }
}