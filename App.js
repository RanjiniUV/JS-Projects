import React,{Component} from 'react';
import ReactDOM,{ render } from 'react-dom';
import Grid from './src/Containers/Grid';
import Stylesheet from './src/Styles/Stylesheet';
class App extends React.Component {
 render() {
  return (
       <div className="container">
          <Grid />
       </div>
    );
 }
}

ReactDOM.render(
   <App/>,
   document.getElementById('root')
 );