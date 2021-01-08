import React from 'react';
import img from '../assets/img.jpeg';
import './card-style.css';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Card = props => {
    return(
        <div className="card shadow">
            <div className="overflow">
                <img src={img} alt="Image 1" className="card-img-top" />
            </div>
            <div className="card-body text-dark">
                <h5 className="card-title">{props.title}</h5>
                <h6 className="card-text text-secondary">{props.description}</h6>
            </div>
        </div>
    )
}

export default Card;