import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {render} from 'react-dom';
import '../Styles/card.scss';

class Card extends Component {
  constructor(props){
    super(props);
    this.onScroll = this.onScroll.bind(this);
  }

componentDidMount(){
    window.addEventListener("scroll", this.onScroll,false);

}

componentWillUnmount(){
   window.removeEventListener("scroll", this.onScroll,false);
}

onScroll = () =>{
  this.props.onScroll();
}

    render() {
      const {cards}= this.props;
      const cardsForDisplay = cards.map((cards)=>
  
    
  <article className="card" key={cards.name}>
    <picture className="thumbnail">
         <img className="imgStyle" src={cards.imageUrl} alt="" />
    </picture>
    <div className="card-content">
      <div className="card-name">{cards.name}</div>
    <div className="card-details">Text : {cards.text}</div>
    <div className="card-details">Set Name : {cards.set.name}</div>
    <div className="card-details">Type : {cards.type}</div>
   </div>
  </article>
              
            
      )
      return <section className="cards" key={cards.name}>
        {cardsForDisplay}
        </section>;
       }
       
}

Card.propTypes = {
  onScroll : PropTypes.func,
  cards: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    text: PropTypes.string,
    SetName: PropTypes.string,
    type: PropTypes.string
  })).isRequired
}

export default Card;