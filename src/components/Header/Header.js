import React from 'react'; 
import './Header.css';

const header = (props) => {

    return (
        <div className="Header">
            <h1 className="Header__title">{props.title}</h1>
            <h2 className="Header__sub-title">{props.subTitle}</h2>
        </div>
    )
}

export default header;