import axios from 'axios'
class HttpService{
    url = "http://localhost:8000/api";
    
    
    postData = async(item ,added_url) =>{
     const token = await localStorage.getItem('user');
        let headers = {
        'Authorization':token,
        'Content-type':'Application/json',
        }
    // body:JSON.stringify(item)
    
        return axios.post(this.url+"/"+added_url, item,headers)
        .then(function (response) {
            return response;
        })
        // return fetch(this.url+"/"+added_url, requestOptions).then(
        //     response=>response.json()
            
        //     );
        
    }
    
    
    getData = async(added_url) =>{
        const token = await localStorage.getItem("user");
        let requestOptions = {
            method:'GET',
            headers:{
                'Authorization':token,
             'Content-type':'application/json',
        }
        }
        
        return fetch(this.url+"/"+added_url, requestOptions).then(
            response=>response.json());
    }
    
    
    
    }
    
    
    export default HttpService;