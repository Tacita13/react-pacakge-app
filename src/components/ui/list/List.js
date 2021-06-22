import React from 'react';
import Header from '../Header';
import CreateButton from '../CreateButton';
import FilteredList from './FilteredList';
import {applyFilter, search} from '../../../services/filter';

export default function List(props) {
    const {list, filter, mode, query} = props.data;
    const {addNew, changeFilter, changeStatus, changeMode, setSearchQuery} = props.actions;
    const count = list.length;
    const items = search(applyFilter(list, filter), query);

    return (
        <div className="container">
            <div className="row">
                <div className="list">
                    <Header/>
                    <CreateButton {...{addNew, mode, query, setSearchQuery}}/>
                    <FilteredList {...{items, changeStatus}}/>
                </div>
            </div>
        </div>
    );
}
