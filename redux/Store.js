import { applyMiddleware, compose, createStore } from 'redux'
import rootReducer from './reducers'
import logger from 'redux-logger'

//TODO middle where
let finalCreateStore = compose(
		applyMiddleware(logger())
	)(createStore)
//if inital state is not supplied then it is equal to what is given after the equlto sign

export default function configureStore(initialState = { todos: [], user:{} }) {
	return finalCreateStore(rootReducer, initialState)
}

