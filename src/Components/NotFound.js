import React,{Component} from 'react';
import {render} from 'react-dom';
import PropTypes from 'prop-types';
import  '../Styles/notFound.scss';

class NotFound extends React.Component{
    render(){
return(
    <div>
        <p className="NotFound">{this.props.message}</p>
    </div>
    
)
    }
}

NotFound.propTypes = {
    
    message: PropTypes.string.isRequired
}

export default NotFound;