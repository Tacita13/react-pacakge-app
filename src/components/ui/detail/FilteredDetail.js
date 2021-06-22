import React from 'react';
import DetailList from './DetailList';

export default function FilteredList(props) {
    const {items} = props;

    if (items.length === 0) {
        return (
            <p className="alert alert-info">no items</p>
        );
    }

    return (
        <ul className="list-unstyled">
            {items.map(item => (
                <DetailList key={item.id} data={item}/>
            ))}
        </ul>
    );
}
