import React,{Component} from 'react';
import {render} from 'react-dom';
import PropTypes from 'prop-types';
import  '../Styles/searchbar.scss';

class SearchBar extends React.Component {
    constructor(props){
        super(props);
        this.handleChange= this.handleChange.bind(this);
    }
    handleChange = (e) => {
this.props.searchFunc(e);
    }
    render(){
        return(
        <nav className="navbar">
<input type="text" className="input searchbar" placeholder={this.props.searchBy} onChange={this.handleChange} />
</nav>
        )
    }
}

SearchBar.propTypes = {
    
      searchBy: PropTypes.string,
      searchFunc: PropTypes.func
  }

export default SearchBar;