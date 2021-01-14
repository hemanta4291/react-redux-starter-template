import HttpService from './HttpService';
import { ACTION_LOGIN,ACTION_SIGNUP} from '../action/actionType'



export const SignUpService = (credentials) =>{
    // console.log(credentials)
    // console.log("authSERvice")
    const http = new HttpService();
    // console.log(HttpService);
    return http.postData(credentials,ACTION_SIGNUP).then(data=>{
        //console.log(JSON.stringify(data));
        // console.log(data)
        // console.log("olllll ollll")
         return data;
    })
    // .catch((error)=> {console.log(error)
    //     return error; 
    //      });
}

export const LoginUser = (credentials,propsHistory) =>{
    const http = new HttpService();
    // console.log(HttpService);
    return http.postData(credentials,ACTION_LOGIN).then(data=>{
        // console.log(JSON.stringify(data));
        return data;
    }).catch((error)=> {console.log(error)
   return error; 
    });
}