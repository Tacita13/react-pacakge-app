import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Home from './components/wrappers/Home';
import Create from './components/wrappers/Create';
import Detail from './components/wrappers/Detail';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/style/index.css';

ReactDOM.render(
  <Router>
    <div>
      <Switch>
         <Route exact path="/" component={Home}/>
         <Route exact path="/create" component={Create}/>
         <Route exact path="/detail" component={Detail}/>
      </Switch>
    </div>
  </Router>,
  document.getElementById('root')
    )
