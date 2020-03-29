import React,{Component} from 'react';
import ReactDOM,{ render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import CardGridWithSearch from './Containers/Grid';
import rootReducer from './Reducers/index';

const store = createStore(rootReducer);
class App extends React.Component {
 render() {
  return (
       <div>
          <CardGridWithSearch />
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

 export default store;