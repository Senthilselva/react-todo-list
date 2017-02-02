export default actions = {
	addToDo(text) {
		return {
			type : 'ADD_TODO',
			text : text
		}
	}
}