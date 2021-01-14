import HttpService from './HttpService';



export const SignUpService = (credentials) =>{
    // console.log(credentials)
    // console.log("authSERvice")
    const http = new HttpService();
    // console.log(HttpService);
    let signUpUrl = "user/register";
    return http.postData(credentials,signUpUrl).then(data=>{
        //console.log(JSON.stringify(data));
        return data;
    })
    // .catch((error)=> {console.log(error)
    //     return error; 
    //      });
}

export const LoginUser = (credentials,propsHistory) =>{
    const http = new HttpService();
    // console.log(HttpService);
    let signUpUrl = "user/login";
    return http.postData(credentials,signUpUrl).then(data=>{
        console.log(JSON.stringify(data));
        return data;
    }).catch((error)=> {console.log(error)
   return error; 
    });
}