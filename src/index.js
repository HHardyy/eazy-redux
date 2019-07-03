import React from 'react'
import ReactDom from 'react-dom'
import Todolist from './Todolist.js'
import {Provider} from 'react-redux'
import store from './store/'

let App=(
	<Provider store={store}>
		<Todolist/>
	</Provider>
)

ReactDom.render(App,document.getElementById('root'))