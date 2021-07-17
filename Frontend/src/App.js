import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Signin from './components/Login/Signin'
import Signup from './components/Signup/Signup';
import Meetend from './components/Meetend/Meetend';
import Meeting from './components/Meeting/Meeting';
import Preview from './components/Preview/Preview';
import Home from './components/Home/Home'


const App = () => {
  return (
    <div>
      <Header/>
      <Router>
        <Switch>
          <Route path='/' exact component={Signin} />
          <Route path='/signin' exact component={Signin} />
          <Route path='/signup' exact component={Signup} />
          <Route path='/meetend' exact component={Meetend} />
          <Route path='/home' exact component={Home} />
          <Route path='/meeting' exact component={Meeting} />
          <Route path='/preview' exact component={Preview} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
