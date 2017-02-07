import React, { Component } from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from "../redux/Actions"
import UserInfo from "./UserInfo"

class App extends Component {

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <UserInfo user = {this.props.user} createNewUserId = {this.props.actions.createNewUserId} />
        <TodoInput addToDo={this.props.actions.addToDo}/>
        <TodoList actions={this.props.actions} todos = {this.props.todos}/>
      </div>
    )
  }

}

//this function should return only the state you would like to pass
function mapStateToProps(state) {
	return state
}

//bindActionCreator is a redux function 
function mapDispatchToProps(dispatch){
  return {
    actions : bindActionCreators(actions,dispatch)
  }
}
//connect takes in a function and uses it to with the App and provider to pass it along
export default connect(mapStateToProps, mapDispatchToProps)(App)
