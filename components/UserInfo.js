import React, { Component } from 'react'

class UserInfo extends Component {

  constructor(props, context) {
    super(props, context)
 //   this.handleNewId = this.handleNewId.bind(this)
  }

  handleNewId(event){
    this.props.actions.createNewUserId()
    //dispatch an action
  }

  handleNewIdIfOdd(event){
    this.props.actions.createNewUserIdOdd()
    //dispatch an action
  }

  handleNewUserIdAsync(event){
    this.props.actions.createNewUserIdAsync()
    //dispatch an action
  }

  render() {
    return (
      <div>
        <div> username : {this.props.user.username} </div>
        <div> id : {this.props.user.id}</div>
        <button onClick={this.handleNewId.bind(this)}> Update with Randoom Id </button>
        <button onClick={this.handleNewIdIfOdd.bind(this)}> Update only if Odd </button>
        <button onClick={this.handleNewUserIdAsync.bind(this)}> Update Async </button>
      </div>
    )
  }

}

export default UserInfo
