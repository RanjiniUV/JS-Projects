import React,{Component} from 'react';
import {render} from 'react-dom';

import Card from '../Components/Cards/Card';
class Grid extends React.Component{
    constructor(props){
        super(props);
        
    }
    render(){
        return(
            <Card />
        )
    }
}

// const mapStateToProps = state => ({
//     todos: getVisibleTodos(state.todos, state.visibilityFilter)
//   })
  
//   const mapDispatchToProps = dispatch => ({
//     toggleTodo: id => dispatch(toggleTodo(id))
//   })
  
//   export default connect(mapStateToProps, mapDispatchToProps)(Grid);

export default Grid;