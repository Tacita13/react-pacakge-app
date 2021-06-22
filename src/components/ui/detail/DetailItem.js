import React from 'react';
import DetailList from './DetailList';

export default function DetailItem(props) {
    const {data} = props;
    const className = 'list-item ui-state-default '

    return (
        <li className={className}>
            <div className=" buttons detail ">
                <label>
                    <DetailList data={props.data}/>{data.text}
                </label>
            </div>
        </li>
    );
}
