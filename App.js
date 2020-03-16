import React,{Component} from 'react';
import ReactDOM,{ render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Grid from './src/Containers/Grid';
import Stylesheet from './src/Styles/Stylesheet';
import rootReducer from './src/Reducers/index';
const store = createStore(rootReducer);
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