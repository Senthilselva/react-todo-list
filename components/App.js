import React, { Component } from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import { connect } from 'react-redux'

class App extends Component {

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <TodoInput dispatch={this.props.dispatch}/>
        <TodoList todos = {this.props.todos}/>
      </div>
    )
  }

}

//this function should return only the state you would like to pass
function mapStateToProps(state) {
	return state
}

//connect takes in a function and uses it to with the App and provider to pass it along
export default connect(mapStateToProps)(App)
