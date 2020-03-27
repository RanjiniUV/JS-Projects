import React,{Component} from 'react';
import {render} from 'react-dom';
import PropTypes from 'prop-types';

class NotFound extends React.Component{
    render(){
return(
    <div>
        <h3>{this.props.message}</h3>
    </div>
    
)
    }
}

NotFound.propTypes = {
    
    message: PropTypes.string.isRequired
}

export default NotFound;