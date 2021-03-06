import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import {createStore, compose, applyMiddleware} from 'redux'
import Header from './Layout/Header/Header'
import Footer from './Layout/Footer/Footer'
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'
import SignUp from './Pages/SignUp/Signup'
import Dashboard from './Pages/Dashboard/Dashboard'
import {PrivateRoute} from './Components/PrivateRoute'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import RootReducer from './store/reducer/Rootreducer'
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(RootReducer, composeEnhancer(applyMiddleware(thunk)))

const App=()=> {

  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Header/>
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
    </Provider>
  );
}

export default App;
