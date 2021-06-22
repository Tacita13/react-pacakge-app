import React from 'react';
import PackageItem from './PackageItem';
import {MSG_NO_ITEMS} from '../../../assets/text/en_US';

export default function FilteredList(props) {
    const {items, changeStatus} = props;

    if (items.length === 0) {
        return (
            <p className="alert alert-info">{MSG_NO_ITEMS}</p>
        );
    }

    return (
        <ul className="list-unstyled">
            {items.map(item => (
                <PackageItem key={item.id} data={item} changeStatus={changeStatus}/>
            ))}
        </ul>
    );
}
