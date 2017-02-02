import { createStore } from 'redux'

//TODO middle where
export default function configureStore(initalState = { todos: [] }) {
	return createStore(reducer, initialState)
}