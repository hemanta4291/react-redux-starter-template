import React from 'react';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router'
import {connect} from 'react-redux'
import './Header.css'
const Header = ({history}) => {

    const logOut = (e)=>{
        localStorage.removeItem('user');
        history.push('/login')
      }
    return (
        <div className="header__wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <Link to="/">Starter</Link>
                    </div>  
                    <div className="col-lg-6">
                        <ul className="navbar__wr">
                            {localStorage.getItem('user')?<li><Link onClick={logOut}>Logout</Link></li>:
                            <>
                             <li><Link to="/login">Login</Link></li>
                            <li><Link to="/signup">Sign up</Link></li>
                            </> 
                        }
                        </ul>
                    </div>  
                </div>
            </div>
        </div>
    );
}
// const mapStateToProps = (state) =>{
//     return {
//       authResponse:state.auth.authResponse
//     }
//   }
// export default connect(mapStateToProps)(Header)
export default withRouter(Header)
