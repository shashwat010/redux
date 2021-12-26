import { ADD_NOTIFY } from "./notifyTypes";

const initialState={
    notification: []
}

const reducer=(state=initialState,action)=>{
    switch(action.type){
        case ADD_NOTIFY : return{
            ...state,
            notification:[...state.notification,action.payload]
        }
        default:  return state
    }
}

export default reducer