import * as actionTypes from "../actionTypes";

const initialState = {
    User : { 
        UserName : "Alex. Kim",
        Password : "Garrick",
        Street : "Wall Streets",
        Mobile : 0
    }
}

const userReducer = (state=initialState, action)=>{
    switch (action.type) {

        case actionTypes.AddUserToStore:
            return {...state, User : action.payload} //action.payload is new user that we need do return in newstate
    
        default:
            return state;
            break;
    }
}

export default userReducer;