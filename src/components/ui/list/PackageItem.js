import React from 'react';
import DetailsButton from '../detail/DetailsButton';
import DetailList from '../detail/DetailList';


export default function PackageItem(props) {
    const {data} = props;
    const className = 'list-item ui-state-default '


    return (
        <li className={className}>
            <div className="checkbox buttons detail ">
                <label>
                    <DetailsButton data={props.data}/>{data.text}
                </label>
            </div>
        </li>
    );
}
