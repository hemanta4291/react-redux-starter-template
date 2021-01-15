import React,{useState} from 'react';
import { connect } from 'react-redux'
import {Redirect} from 'react-router-dom'
import { ContactAd } from '../../store/action/ContactActions'

const Dashboard = ({ContactAd,contactResponse}) => {
    const [contactAd, setContactAd] = useState({
        firstname:'',
        lastname:'',
        email:'',
        phonenumber:''
    });
    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        contactAd[name] = value;
        setContactAd(contactAd);
    }
    const save = (e) =>{
        e.preventDefault();
        ContactAd(contactAd)
        //console.log(contactAd)
    }
    return(
        <div className="home__wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 ofset-lg-5 mx-auto">
                        <h2 className="mt-5 mb-3">Dashboard Contact</h2>
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
                                <input type="number" className="form-control" name="phonenumber" id="phonenumber" onChange={handleChange} placeholder="phonenumber"/>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                            <p>{contactResponse? contactResponse: ''}</p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
const mapStateToProps = (state) =>{
    return {
        contactResponse:state.contact.contactResponse
    }
  }
  
  const mapDispatchToProps = (dispatch)=>{
      console.log(dispatch)
    return {
        ContactAd:(creds) => dispatch(ContactAd(creds)),
    //   resetAuthResponsePerComponent:() =>dispatch(resetAuthResponsePerComponent())
  
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(Dashboard)
