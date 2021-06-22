import React from 'react';

export default function ButtonWrapper(props) {

    return (
        <div>
            <a title="Create New Pacakge"
                className={'button add '}
                onClick={event => window.location.href = "/create"}></a>
        </div>
    );
}
