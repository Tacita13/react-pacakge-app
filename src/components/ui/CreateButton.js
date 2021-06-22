import React from 'react';
import ButtonWrapper from './ButtonWrapper';

export default function CreateButton(props) {
    return (
        <header>
            <div className="pull-right buttons">
                <ButtonWrapper {...props}/>
            </div>
        </header>
    );
}
