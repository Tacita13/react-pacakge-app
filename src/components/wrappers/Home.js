import React, {Component, Router, Route, Switch} from 'react';
import List from '../ui/list/List';
import StateProvider from './StateProvider';

class Home extends Component {
    render() {
        return (
          <StateProvider>
            <List/>
          </StateProvider>
        );
    }
}

export default Home;
