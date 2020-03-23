import React,{Component} from 'react';
import {render} from 'react-dom';
import {connect} from 'react-redux';
import {displayCards,displayCardsSuccess,fetchCardsForDisplay}  from '../Actions/index';
import Card from '../Components/Card';

class Grid extends React.Component{
    constructor(props){
        super(props);
    
        this.state={
            
        };

    }

    componentDidMount(){
         if(!this.props.cardsObject.isFetching && !this.props.cardsObject.error){
             this.props.onPageLoad();
         }

        

    }
    componentDidUpdate(){
        if(this.props.cardsObject.isFetching && !this.props.cardsObject.error){
          fetchCardsForDisplay(this.props.cardsObject.isFetching);
        }
    }
    render(){
        const {cards} = this.props.cardsObject;

        return(
            <Card cards={cards}/>
        )
    }
}

const mapStateToProps = state => ({
    cardsObject : state
  });
  
const mapDispatchToProps = dispatch => ({
    onPageLoad :() => dispatch (displayCards())
  });
  
  export default connect(mapStateToProps,mapDispatchToProps)(Grid); 