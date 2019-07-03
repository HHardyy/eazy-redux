import React,{Component} from 'react'
import 'antd/dist/antd.css';
import store from './store/'
import {setINitValue,changeListData,delThisItem,getInitListFunc} from './store/actionCreators.js'
import TodoListUI from './todolistui.js'


class Todolist extends Component{
	constructor(props){
		super(props)
		this.state=store.getState()
		this.handleFunc=this.handleFunc.bind(this)
		this.handleSubmit=this.handleSubmit.bind(this)
		this.handleStore=this.handleStore.bind(this)
		this.handleDelItem=this.handleDelItem.bind(this)
		store.subscribe(this.handleStore)
	}
	render(){
		return (
			<TodoListUI
			inputValue={this.state.inputValue}
			list={this.state.list}
			handleFunc={this.handleFunc}
			handleSubmit={this.handleSubmit}
			handleDelItem={this.handleDelItem}
			></TodoListUI>
			)
	}
	componentDidMount(){
		let action=getInitListFunc()
		store.dispatch(action)
	}
	handleFunc(e){
		let action=setINitValue(e.target.value)
		store.dispatch(action)
	}
	handleStore(){
		this.setState(store.getState())
	}
	handleSubmit(){
		let action=changeListData()
		store.dispatch(action)
	}
	handleDelItem(index){
		let action=delThisItem(index)
		store.dispatch(action)
	}
}

export default Todolist