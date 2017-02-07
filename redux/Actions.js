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
	}
}

export default actions