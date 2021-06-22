import React, {Component} from 'react';
import DetailList from '../ui/detail/DetailList';
import StateProvider from './StateProvider';

class Detail extends Component {
  constructor(props) {
      super(props);
  }


    render() {
        return (
          <StateProvider>
            <DetailList/>
          </StateProvider>
        );
    }
}

export default Detail;
