const initState = {
    authResponse:null
    }
    
    
    
    const AuthReducer = (state=initState, action) =>{
        switch(action.type){
            case 'RESTART_AUTH_RESPONSE':
                return {
                    ...state,
                    authResponse:null
                }
                case 'LOADING':
                    return {
                        ...state,
                        authResponse:'loading...'
                    }
            case 'SHORT_PASSWORD':
                console.log(action.res);
                return{
                    ...state,
                    authResponse: 'password is too short'
                 }
        
          case 'SIGNUP_SUCCESS':
              let authResponse = null
              if(action.res.data.message){
                authResponse=action.res.data.message
              }else{
                authResponse='Signup Successfully done plz login!'
              }
              return {
                  ...state,
                  authResponse,
              }
    
              case 'SIGNUP_ERROR':
                    console.log(action)
                    return {
                        ...state,
                        authResponse:action.res.message,
                    }
    
                    case 'CODE_ERROR':
                            console.log(action)
                            return {
                                ...state,
                                authResponse:'there seems to be a problem please try again later',
                            }
                            case 'LOGIN_SUCCESS':
                                console.log(action)
                                return {
                                    ...state,
                                    authResponse:'',
                                }
                                case 'LOGIN_ERROR':
                                    console.log(action)
                                    return {
                                        ...state,
                                        authResponse:action.res.message,
                                    }
    
                default:
                    return state
    
        }
    }
    
    export default AuthReducer;