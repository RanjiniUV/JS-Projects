import React,{Component} from 'react';
import {render} from 'react-dom';
import {connect} from 'react-redux';
import {displayCards,displayCardsSuccess,fetchCardsForDisplay}  from '../Actions/index';
import Card from '../Components/Card';
import SearchBar from '../Components/SearchBar';

class Grid extends React.Component{
    constructor(props){
        super(props);
    
        this.state={
            filtered :[]
        };
        this.onSearch= this.onSearch.bind(this);

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


    onSearch(e){
        
        
        let searchedList = [];
        let currentList = this.props.cardsObject.cards;
        if (e.target.value !== "") {
            searchedList = currentList.filter(item => {
         const lc = item.name.toLowerCase();
         const filter = e.target.value.toLowerCase();
        return lc.includes(filter);
      });
    } else {
        searchedList = <div>No Cards Found</div>;
    }
    console.log("the searched content is", searchedList);
    this.setState({
      filtered: searchedList
    });

    }
    render(){
        const {cards} = this.props.cardsObject;

        return(
            <div>
                <SearchBar searchBy="Search By Name" searchFunc={this.onSearch}/>
            
                <Card cards={this.state.filtered.length > 0 ? this.state.filtered : cards}/>
            </div>
                
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