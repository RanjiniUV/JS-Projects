import React,{Component} from 'react';
import {render} from 'react-dom';
import {connect} from 'react-redux';
import {displayCards,displayCardsSuccess,fetchCardsForDisplay,fetchCardsForInfiniteScrolling}  from '../Actions/index';
import Card from '../Components/Card';
import SearchBar from '../Components/SearchBar';
import NotFound from '../Components/NotFound';
import Spinner from '../Components/Spinner';
import  '../Styles/grid.scss';

const WithCardDetails = WrappedComponent => {
    return class Grid extends React.Component{
        constructor(props){
            super(props);
        
            this.state={
                loadSpinner : false,
                isSearching: false,
                filtered :[]
            };
            this.onSearch= this.onSearch.bind(this);
            this.onScroll = this.onScroll.bind(this);
    
        }
      
    
        componentDidMount(){
             if(!this.props.cardsObject.isFetching && !this.props.cardsObject.error){
                 this.props.onPageLoad();
             }
             window.addEventListener("scroll", this.onScroll,false);
    
        }

    
        componentWillUnmount(){
            window.removeEventListener("scroll", this.onScroll,false);
        }
    
        componentDidUpdate(){
            if((this.props.cardsObject.isFetching && !this.props.cardsObject.error) || this.props.cardsObject.isLoadingForInfiniteScrolling ){
              fetchCardsForDisplay(this.props.cardsObject.pageCounter);
            }
          
        }
    
        onScroll(){
           

            if (
                (window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 500) &&
                this.props.cardsObject.cards.length && !this.props.cardsObject.isLoadingForInfiniteScrolling
              )
              {
                this.props.fetchDataForInfiniteScrolling();
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
                   {isFetching || this.state.loadSpinner && <Spinner />}
                {!isFetching && this.state.isSearching && this.state.filtered.length == 0 && <NotFound message="No CARDS FOUND!"/>}
                {!isFetching && this.state.isSearching && this.state.filtered.length  > 0 && <WrappedComponent cards={this.state.filtered} onScroll={this.scroll}/>}
                {!isFetching && !this.state.isSearching && <WrappedComponent cards={cards} onScroll={this.onScroll}/>}
                </div>
                    
            )
        }
    }
}

const CardGridWithSearch = WithCardDetails(Card);


const mapStateToProps = state => ({
    cardsObject : state
  });
  
const mapDispatchToProps = dispatch => ({
    onPageLoad :() => dispatch (displayCards()),
    fetchDataForInfiniteScrolling: ()=>dispatch(fetchCardsForInfiniteScrolling())
  });
  
  export default connect(mapStateToProps,mapDispatchToProps)(CardGridWithSearch); 