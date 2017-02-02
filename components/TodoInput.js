import React, { Component } from 'react'
import Actions from '../redux/Actions'

class TodoInput extends Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
      inputText: ''
    }
    
  }

  handleChange(event) {
    this.setState({
      inputText: event.target.value
    })
  }

  handleSubmit(event){
    event.preventDefault()
    console.log("handleSubmit")
    this.props.dispatch(Actions.addToDo(this.state.inputText))
  }
  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Type in your Todo's"
          value={this.state.inputText}
          onChange={this.handleChange.bind(this)}
        />
        <button onClick = {this.handleSubmit.bind(this)}> Submit </button>
      </div>
    )
  }

}

export default TodoInput
