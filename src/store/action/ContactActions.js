import {addNewContact} from '../services/ContactService' 

export const ContactAd = (credentials) =>{
    return (dispatch) =>{
        dispatch({type:'RESTART_ADD_UPDATE_RESPONSE'});
        dispatch({type:'LOADING'});
       addNewContact(credentials).then((res)=>{
            console.log(res);
                dispatch({type:'NEW_CONTACT_SUCCESS',res})
        },
        error=>{
            dispatch({type:'NEW_CONTACT_CODE_ERROR',error});
        }
        
        )
    }
}