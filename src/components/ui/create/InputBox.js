import React from 'react';
import enhance from '../../hoc/wrapInputBox';
import DetailList from '../detail/DetailList';
import StateProvider from '../../wrappers/StateProvider';

function InputBox(props) {
    const { value, handleChange, handleKeyUp } = props;

    return (
      <StateProvider>
        <DetailList/>
      </StateProvider>
    );
}

export default enhance(InputBox);
