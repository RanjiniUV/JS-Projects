import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {render} from 'react-dom';

class Card extends Component {
    render() {
      const {cards}= this.props;
      const cardsForDisplay = cards.map((cards)=>
<div className="row" key={cards.name}>
                  <div className="col-sm-4">
             <div className="card">
               <div className="card-body">
    <h5 className="card-title" >{cards.name}</h5>
    <p className="card-text">{cards.text}</p>
               </div>
             </div>
           </div>
           <div className="col">
             <div className="card">
               <div className="card-body">
    <h5 className="card-title">{cards.rarity}</h5>
    <p className="card-text">{cards.type}</p>
               </div>
             </div>
           </div>
         </div>
      )
      return cardsForDisplay;
       }
       
}

Card.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    text: PropTypes.string,
    rarity: PropTypes.string,
    type: PropTypes.string
  })).isRequired
}

export default Card;