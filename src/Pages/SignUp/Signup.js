import React,{useState} from 'react';
import { connect } from 'react-redux'
import {Redirect} from 'react-router-dom'
import {register,resetAuthResponsePerComponent} from '../../store/action/AuthAction'

const Signup = ({resister,authResponse}) => {
    const [SignUp, setSignUp] = useState({
        firstname:'',
        lastname:'',
        email:'',
        password:''
    });
    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        SignUp[name] = value;
        setSignUp(SignUp);
    }
    const save = (e) =>{
        e.preventDefault();
        resister(SignUp)
    }
    if(localStorage.getItem('user')){
        return <Redirect to="/dashboard" />;
    }
    return(
        <div className="home__wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 ofset-lg-5 mx-auto">
                        <h2 className="mt-5 mb-3">Registration</h2>
                        <form onSubmit={save}>
                            <div className="form-group">
                                <input type="text" className="form-control" name="firstname" id="firstname" aria-describedby="emailHelp" onChange={handleChange} placeholder="First Name"/>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" name="lastname" id="lastname" aria-describedby="emailHelp" onChange={handleChange} placeholder="Last Name"/>
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control" name="email" id="email" aria-describedby="emailHelp" onChange={handleChange} placeholder="Enter email"/>
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" name="password" id="password" onChange={handleChange} placeholder="Password"/>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                            <p>{authResponse? authResponse: ''}</p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
const mapStateToProps = (state) =>{
    console.log(state)
    return {
      authResponse:state.auth.authResponse
    }
  }
  
  const mapDispatchToProps = (dispatch)=>{
      console.log(dispatch)
    return {
      resister:(creds) => dispatch(register(creds)),
    //   resetAuthResponsePerComponent:() =>dispatch(resetAuthResponsePerComponent())
  
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(Signup)
