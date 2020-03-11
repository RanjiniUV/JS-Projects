import React,{Component} from 'react';
import ReactDOM,{ render } from 'react-dom';

class Hello extends React.Component {
 render() {
  return (
       <div>
          <h1>Hello Momo!</h1>
       </div>
    );
 }
}

ReactDOM.render(
   <Hello/>,
   document.getElementById('root')
 );