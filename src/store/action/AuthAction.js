import {SignUpService } from '../services/AuthService'
import {LoginUser} from '../services/AuthService'
import { SHORT_PASSWORD } from '../action/actionType'

export const register = (credentials) =>{
    // console.log(credentials);
    // console.log("authauction")
    return (dispatch)=>{
        dispatch({type:'RESTART_AUTH_RESPONSE'});
        dispatch({type:'LOADING'});
        if(credentials.password.length < 6){
            return dispatch({type: 'SHORT_PASSWORD'})
        }
    
        SignUpService(credentials).then((res)=>{
             //console.log(res);
            if(res.token!==null){
                localStorage.setItem("user",'Bearer '+res.token);
                dispatch({type:'SIGNUP_SUCCESS',res})
                
            }else{
                dispatch({type:'SIGNUP_ERROR',res})
            }
        },
        error=>{
            dispatch({type:'CODE_ERROR',error});
        }
        
        )
    }
    
    
}


export const UserLogin = (credentials,history) =>{
    
 return (dispatch)=>{
    dispatch({type:'RESTART_AUTH_RESPONSE'});
    dispatch({type:'LOADING'});
     if(credentials.password.length < 6)
     {
        return dispatch({type: SHORT_PASSWORD})
     }
     LoginUser(credentials,history).then((res)=>{
        //  console.log(res);
        //  console.log("koi")
         if(res.data.success===true){
            localStorage.setItem("user",'Bearer '+res.data.token);
            dispatch({type:'LOGIN_SUCCESS'})
            history.push("/dashboard");
            // setTimeout(() => {
            //     history.push("/dashboard");     
            // }, 3000);
            
        }else{
            dispatch({type:'LOGIN_ERROR',res})
        }
    },
    error=>{
        dispatch({type:'CODE_ERROR',error});
        console.log(error)
    }
    
     )
 }   
}


export const resetAuthResponsePerComponent = (dispatch) =>
{
  return (dispatch) =>{
      dispatch({type:'RESTART_AUTH_RESPONSE'});
  }
}