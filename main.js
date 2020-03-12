import React,{Component} from 'react';
import ReactDOM,{ render } from 'react-dom';
import Card from './src/Cards/Card';
import Stylesheet from './src/Styles/Stylesheet';
class App extends React.Component {
 render() {
  return (
       <div className="container">
          <Card />
       </div>
    );
 }
}

ReactDOM.render(
   <App/>,
   document.getElementById('root')
 );