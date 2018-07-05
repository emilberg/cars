import React, { Component } from 'react'; 
import { connect } from 'react-redux';

import {loadMockData} from '../../store/actions';
import Car from '../../components/Car/Car';
import './CarList.css';


class CarList extends Component {
    
    componentDidMount() {
        //trigger load of mocked data
        this.props.dispatch(loadMockData());
    }

    render(){
        return(    
            <div className="CarList">
                {this.props.cars.map(car => (
                    <Car key={car.id} car={car} />
                ))}  
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        cars: state.cars
    };
};

export default connect(mapStateToProps)(CarList);