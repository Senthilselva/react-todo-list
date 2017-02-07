let actions = {
	addToDo: function(text) {
		return {
			type : 'ADD_TODO',
			text : text
		}
	},

	completeTodo: function(id){
		return{
			type: "COMPLETE_TODO",
			id: id
		}
	},

	deleteTodo: function(id){
		return{
			type: "DELETE_TODO",
			id: id
		}
	},

	createNewUserId: function(){
		return{
			type: "CREATE_ID",
			id: Math.round(Math.random()*100)
		}
	},

	createNewUserIdOdd: function(){
		//gets the dispatch from store
		return(dispatch, getState) => {
			const { user } = getState()
			if(user.id % 2 === 0){
				return
			}
			dispatch(actions.createNewUserId())
		}
	},

	//could be used in all server call and checks more important
	createNewUserIdAsync: function(){
		//gets the dispatch from store
		return(dispatch) => {
			setTimeout(()=> {
			dispatch(actions.createNewUserId())
		},2500)
		}
	}
}

export default actions