import React from 'react';
import InputBox from './InputBox';

export default function InputWrapper(props) {
    const {mode, addNew, query, setSearchQuery} = props;
      return <InputBox {...{addNew}}/>;

}
