import { applyMiddleware, compose, createStore } from 'redux'
import reducer from './reducer'
import logger from 'redux-logger'

//TODO middle where
let finalCreateStore = compose(
		applyMiddleware(logger())
	)(createStore)

export default function configureStore(initialState = { todos: [] }) {
	return createStore(reducer, initialState)
}

