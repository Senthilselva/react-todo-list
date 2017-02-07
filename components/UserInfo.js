import React, { Component } from 'react'

class UserInfo extends Component {

  constructor(props, context) {
    super(props, context)
 //   this.handleNewId = this.handleNewId.bind(this)
  }

  handleNewId(event){
    event.preventDefault()

    console.log("handleNewId")
    this.props.createNewUserId()
    //dispatch an action
  }

  render() {
    return (
      <div>
        <div> username : {this.props.user.username} </div>
        <div> id : {this.props.user.id}</div>
        <button onClick={this.handleNewId.bind(this)}> Update with Randoom Id </button>
      </div>
    )
  }

}

export default UserInfo
