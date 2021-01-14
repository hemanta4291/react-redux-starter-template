import React from 'react';

const Login = () => {
    return (
        <div className="home__wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 ofset-lg-5 mx-auto">
                        <h2 className="mt-5 mb-3">Login</h2>
                        <form>
                            <div className="form-group">
                                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"/>
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" id="password" placeholder="Password"/>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
