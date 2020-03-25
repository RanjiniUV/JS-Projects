import React,{Component} from 'react';
import {render} from 'react-dom';
import {connect} from 'react-redux';
import {displayCards,displayCardsSuccess,fetchCardsForDisplay}  from '../Actions/index';
import Card from '../Components/Card';
import SearchBar from '../Components/SearchBar';
import NotFound from '../Components/NotFound';
import Spinner from '../Components/Spinner';

class Grid extends React.Component{
    constructor(props){
        super(props);
    
        this.state={
            isSearching: false,
            filtered :[]
        };
        this.onSearch= this.onSearch.bind(this);

    }

    componentDidMount(){
         if(!this.props.cardsObject.isFetching && !this.props.cardsObject.error){
             this.props.onPageLoad();
         }

         window.addEventListener("scroll", this.onScroll.bind(this), false);

    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.onScroll.bind(this), false);
    }

    componentDidUpdate(){
        if(this.props.cardsObject.isFetching && !this.props.cardsObject.error){
          fetchCardsForDisplay(this.props.cardsObject.pageCounter);
        }
    }

    onScroll () {
        var nearBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;
        if (!this.props.cardsObject.isFetching && nearBottom) {
            fetchCardsForDisplay(this.props.cardsObject.pageCounter);
        }
    }


    onSearch(e){
        // example for search API https://api.elderscrollslegends.io/v1/cards?name=courier
        //use the current set and check if it already exists in the props if not then make the API call
        let searchedList = [];
        let currentList = this.props.cardsObject.cards;
        if (e.target.value !== "") {
            searchedList = currentList.filter(item => {
         const lc = item.name.toLowerCase();
         const filter = e.target.value.toLowerCase();
        return lc.includes(filter);
        
      });
      this.setState({
        isSearching: true,
      filtered: searchedList
    });
    }
    if(e.target.value == ""){
        this.setState({
            isSearching: false,
          filtered: currentList
        });
    }

    }
    render(){
        const {cards,isFetching} = this.props.cardsObject;

        return(
            <div>
                
                <SearchBar searchBy="Search By Name" searchFunc={this.onSearch}/>
               {isFetching && <Spinner />}
            {!isFetching && this.state.isSearching && this.state.filtered.length == 0 && <NotFound message="No CARDS FOUND!"/>}
            {!isFetching && this.state.isSearching && this.state.filtered.length  > 0 && <Card cards={this.state.filtered}/>}
            {!isFetching && !this.state.isSearching && <Card cards={cards}/>}
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