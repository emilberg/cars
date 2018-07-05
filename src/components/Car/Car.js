import React from 'react'; 
import './Car.css';

const car = (props) => {
    const carStyle = {
        borderColor: props.car.color
    };

    return (
        <div className="Car" style={carStyle}>
            <h2 className="Car__title">{props.car.name}</h2>
            <ul className="Car__data-list">
                <li className="Car__data-list__item">
                    <label className="label">Registration number</label>
                    {props.car.reg}
                </li>
                <li className="Car__data-list__item">
                    <label className="label">Model year</label>
                    {props.car.year}
                </li>
                <li className="Car__data-list__item">
                    <label className="label">Color</label>
                    {props.car.color}
                </li>                
            </ul>

        </div>
    )
}

export default car;