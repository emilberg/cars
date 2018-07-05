import React from 'react'; 
import { connect } from 'react-redux';

import { SEARCH_CAR } from '../../store/actionTypes';
import './Search.css';

const search = (props) => {
        return (
            <div className="Search">
                <label htmlFor="carSearch" className="label">Filter year</label>
                <input id="carSearch" className="Search__input" type="text" onChange={(event) => props.onSearchChanged(event.target.value)} />
            </div>
        )    
}


const mapDispatchToProps = dispatch => {
    return {
        onSearchChanged: (value) => dispatch({ type: SEARCH_CAR, value: value })
    }
};


export default connect(null, mapDispatchToProps)(search);