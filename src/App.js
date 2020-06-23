import React from 'react';
import './App.css';
import store from './store'
import {Provider} from 'react-redux'
import Courses from './components/pages/Courses'
import Lessons from './components/pages/Lessons'
import Header from './components/layout/Header'
import {BrowserRouter as Router , Switch, Route} from 'react-router-dom'
import Footer from './components/layout/Footer'
import Login from './components/layout/Login'
import Register from './components/layout/Register'
import { loadUser} from './actions/authActions';


class App extends React.Component {
componentDidMount(){
  store.dispatch(loadUser());
}
  render(){ 
    return (
      <Router>
          <Provider store={store}>
              <div className="">
                <Header/>
                <div className="mb-100 form-padding">
                  <Switch>
                    <Route exact path="/" component={Courses}/>
                    <Route exact path="/register" component={Register}/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/logout" component={Login}/>
                    <Route exact path="/:courseId/lessons" component={Lessons}/>
                  </Switch>
                  
                </div>
                <Footer/>
              </div>
          </Provider>
      </Router>
    );
  }

  }
 

export default App;


