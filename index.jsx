//this file is out entrypoint of our client side code. 
import * as React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.hydrate(<App />, document.getElementById('root'))
// we use hydrate instead of render because it has already been rendered in our server and we just want to hydrate it here. 

// what does hydrating means? it means we are going to attach all event handlers and JS codes that are for interaction between user and our page. 
// so we can not understand that JS code are essential for rendering elements like button size or something like that are not rehydrating and they will get render on initial load to paint our HTML but onClick handler are that actions can send to client later