import {GET_EMPLOYEES} from '../actions/types.js'

const initialState = {
    employees: []
};

export default function (state= initialState, action) {
    switch(action.type){
        case GET_EMPLOYEES:
            return{
                ...state,
                employees: action.payload
            };
        default:
            return state;
    }

}

