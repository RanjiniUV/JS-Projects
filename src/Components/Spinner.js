import React,{Component} from 'react';
import {render} from 'react-dom';

class Spinner extends React.Component{
    render(){
        return <div>
              <Spinner animation="border" size="sm" />
  <Spinner animation="border" />
  <Spinner animation="grow" size="sm" />
  <Spinner animation="grow" />
        </div>
    }
}

export default Spinner;