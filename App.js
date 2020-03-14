import React,{Component} from 'react';
import ReactDOM,{ render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Grid from './src/Containers/Grid';
import Stylesheet from './src/Styles/Stylesheet';
import displayCard from './src/Reducers/Reducer';
const store = createStore(displayCard);
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
   <Provider store={store}>
     <App />
   </Provider>,
   document.getElementById('root')
 );