import React,{useState} from 'react';
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {UserLogin,resetAuthResponsePerComponent} from '../../store/action/AuthAction'

const Login = ({UserLogin1,authResponse,history}) => {
    const [LoginText, setLoginText] = useState({
        email:'',
        password:''
    });
    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        LoginText[name] = value;
        setLoginText(LoginText);
    }
    const save = (e) =>{
        e.preventDefault();
        UserLogin1(LoginText,history)
    }
    if(localStorage.getItem('user')){
        return <Redirect to="/dashboard" />;
    }  
    return (
        <div className="home__wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 ofset-lg-5 mx-auto">
                        <h2 className="mt-5 mb-3">Login</h2>
                        <form onSubmit={save}>
                            <div className="form-group">
                                <input type="email" className="form-control" name="email" id="email" aria-describedby="emailHelp" onChange={handleChange} placeholder="Enter email"/>
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" name="password" id="password" onChange={handleChange} placeholder="Password"/>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                            <p>{authResponse?authResponse:''}</p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) =>{
    return {
      authResponse:state.auth.authResponse
    }
  }
  
  const mapDispatchToProps = (dispatch)=>{
    return {
      UserLogin1:(creds,history) => dispatch(UserLogin(creds,history)),
      resetAuthResponsePerComponent:() =>dispatch(resetAuthResponsePerComponent()),
    }
  }
  
  
  export default connect(mapStateToProps,mapDispatchToProps)(Login)
  
