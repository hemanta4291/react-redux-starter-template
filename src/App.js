import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Header from './Layout/Header/Header'
import Footer from './Layout/Footer/Footer'
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'
import SignUp from './Pages/SignUp/Signup'
import Dashboard from './Pages/Dashboard/Dashboard'
import {PrivateRoute} from './Components/PrivateRoute'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/login" component={Login}/>
                <Route path="/signup" component={SignUp}/>
                {/* <Route path="/dashboard" component={Dashboard}/> */}
                <PrivateRoute path="/dashboard" component={Dashboard} />
            </Switch>
          <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;
