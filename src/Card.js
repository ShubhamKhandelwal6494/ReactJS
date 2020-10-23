import React, { Component } from 'react';
import './Card.css';
import './App.css';

class Card extends Component{
    constructor(props){
        super(props);
        let angle = Math.random() * 90 -45;
        let xPos = Math.random() * 40 -20;
        let yPos = Math.random() * 40 -20;
        this._transform = `translate(${xPos}px, ${yPos}px) rotate(${angle}deg)`;
    }
    render(){
        return(
            <img className="Card Deck-Area" style={{transform : this._transform}} src={this.props.image} alt={this.props.image} />
        )
    }
}

export default Card;