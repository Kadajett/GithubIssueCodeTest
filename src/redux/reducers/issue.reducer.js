import ActionTypes from "../actions/ActionTypes";
const {
    SET_ISSUE_ORDER,
} = ActionTypes;

const initialState = {
    order: 'Newest',
};

export default function IssueReducer(state = initialState, action) {
    switch(action.type) {
        case SET_ISSUE_ORDER:
            return {...state, order: action.orderBy}
        default:
            return state;
    }
}