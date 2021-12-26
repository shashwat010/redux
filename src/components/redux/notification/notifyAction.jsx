import { ADD_NOTIFY } from "./notifyTypes";

export const addNotify=(newNotify='')=>{
    return{
        type:ADD_NOTIFY,
        payload:newNotify
    }
}