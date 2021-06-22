import React, {Component} from 'react';
import {BrowserRouter as Router,Route,Switch, Link} from 'react-router-dom';
import DetailList from './DetailList';
import Detail from '../../../components/wrappers/Detail';

class DetailsButton extends Component {
    constructor(props) {
        super(props);
    }

    handleClick(params) {
      const id = new URLSearchParams(params.id).toString().replace('=','');
      window.location.href = "/detail/?id=" + id;
    }
      render() {
        return (
          <button className='button detail' onClick={() => this.handleClick(this.props.data)}></button>
        )
      }
    }

export default DetailsButton;
