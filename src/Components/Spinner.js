import React,{Component} from 'react';
import {render} from 'react-dom';

class Spinner extends React.Component{
    render(){
        return <h3>
          <div className="d-flex justify-content-center">
  <div className="spinner-border" role="status">
    <span className="sr-only">Loading...</span>
  </div>
</div>
        </h3>
    }
}

export default Spinner;