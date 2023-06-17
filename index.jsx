//this file is out entrypoint of our client side code. 
import * as React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.hydrate(<App />, document.getElementById('root'))