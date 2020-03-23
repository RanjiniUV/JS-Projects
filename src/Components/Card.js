import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {render} from 'react-dom';
import cardContainer from '../Styles/custom.css';

class Card extends Component {
    render() {
      const {cards}= this.props;
      const cardsForDisplay = cards.map((cards)=>
  
    
  <article className="card" key={cards.name}>
    <picture className="thumbnail">
         <img className="category__01" src="https://abbeyjfitzgerald.com/wp-content/uploads/2018/01/cloud.svg" alt="" />
    </picture>
    <div className="card-content">
      <p className="category category__01">Cloud Storage</p>
      <h2>Photo Storage</h2>
      <p>TUX re-inventing the wheel, and move the needle. Feature creep dogpile that but diversify kpis but market-facing.</p>
   </div>
    <footer>
      <div className="post-meta">
        <span className="timestamp"><i className="fa fa-clock-o"></i> 6 mins ago</span>
        <span className="comments"><i className="fa fa-comments"></i><a href="#"> 14 comments</a></span>
        </div>
    </footer>
  </article>
              
            
      )
      return <section className="cards" key={cards.name}>
        {cardsForDisplay}
        </section>;
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