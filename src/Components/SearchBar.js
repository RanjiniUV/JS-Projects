import React,{Component} from 'react';
import {render} from 'react-dom';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
    constructor(props){
        super(props);
        this.handleChange= this.handleChange.bind(this);
    }
    handleChange(e){
this.props.searchFunc(e);
    }
    render(){
        return(
        <nav className="navbar navbar-light bg-light">
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