import React,{Component} from 'react';
import {render} from 'react-dom';
import {connect} from 'react-redux';
import {displayCards,displayCardsSuccess,fetchCardsForDisplay}  from '../Actions/index';
import Card from '../Components/Cards/Card';

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
    componentDidUpdate(dispatch){
        if(this.props.cardsObject.isFetching && !this.props.cardsObject.error){
          fetchCardsForDisplay(this.props.cardsObject.isFetching);
        }
    }
    render(){
        return(
            <Card />
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