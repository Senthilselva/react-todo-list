import React from 'react'
import { render } from 'react-dom'
import App from '../components/App'
//configure and create our store
// var store = createStore(reducers, initialState)
render(
  <App/>,
  document.getElementById('app')
)
