import React,{Component} from 'react';
import {render} from 'react-dom';
import {connect} from 'react-redux';
import displayCards  from '../Actions/index';
import Card from '../Components/Cards/Card';
import { bindActionCreators } from 'redux';
class Grid extends React.Component{
    constructor(props){
        super(props);
        this.state={
            
        };
    }

    componentDidMount(){
        displayCards();
    }

    render(){
        return(
            <Card />
        )
    }
}

// const mapStateToProps = state => ({
    
//   });
  
  const mapDispatchToProps = dispatch => ({
    displayCards:  displayCards()
  })

  
  export default connect(null,mapDispatchToProps)(Grid); 