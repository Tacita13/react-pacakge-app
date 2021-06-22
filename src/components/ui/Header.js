import React from 'react';
import ButtonWrapper from './ButtonWrapper';

export default function Header(props) {
    return (
        <header>
        <h1>
          <a title='Home' className="title"
            onClick={event => window.location.href = "/" }>Factor</a>
        </h1>
        </header>
    );
}
