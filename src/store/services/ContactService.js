import HttpService from './HttpService';
import {ACTION_CONTACT_AD} from '../action/actionType'



export const addNewContact = (credentials) =>{
    const http = new HttpService();
    credentials.token = localStorage.getItem('user');
    //console.log(credentials)
    return http.ContactData(credentials,ACTION_CONTACT_AD).then(data=>{
        
         return data;
    })
    // .catch((error)=> {console.log(error)
    //     return error; 
    //      });
}