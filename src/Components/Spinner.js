import React,{Component} from 'react';
import {render} from 'react-dom';

class Spinner extends React.Component{
    render(){
        return <h3>
          <div class="d-flex justify-content-center">
  <div class="spinner-border" role="status">
    <span class="sr-only">Loading...</span>
  </div>
</div>
        </h3>
    }
}

export default Spinner;