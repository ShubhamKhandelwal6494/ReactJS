import React, {Component} from 'react';
import axios from 'axios';
import './Card.css';
import './App.css';
import Card from './Card';

class CardsDeck extends Component{
    constructor(props){
        super(props);
        this.state = {
            deck: null,
            drawnCard: []
        }
        this.getCard = this.getCard.bind(this);
    }

    async getCard(){
        try {
            const deckId = this.state.deck.deck_id;
            const cardData = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/`);
            if(cardData.data.success){
                this.setState(previousState => ({
                    drawnCard: [...previousState.drawnCard, {
                        id: cardData.data.cards[0].code,
                        image: cardData.data.cards[0].image,
                        name: `${cardData.data.cards[0].value} of ${cardData.data.cards[0].suit}`
                    }]
                }));    
            } 
            else{
                alert("No more cards");
            }
        } catch (error) {
            console.log(error);
        }
    }

    async componentDidMount(){
        const deck = await axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/");
        this.setState({deck : deck.data});
    }

    render(){
        //const cards = this.state.drawnCard.map(card => )
        return(
            <div className="App">
                <h1 className="Deck-title">♦ Card Dealer ♦</h1>
                <h2 className="Deck-title subtitle">♦ A little demo made with react ♦</h2>
                <button className="Deck-btn" onClick={this.getCard}>Get Card</button>
                {this.state.drawnCard.map(card => <Card key={card.id} image={card.image} name={card.name} />)}
            </div>
        )
    }
}

export default CardsDeck;