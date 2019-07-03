import React,{Component,Fragment} from 'react'
import {Input,Button,List} from 'antd'
import store from './store/index'
import {connect} from 'react-redux'
import {CHANGE_INPUT_VALUE,CHANGE_LIST_DATA,DEL_THIS_ITEM} from './store/actionTypes.js'

class Todolist extends Component{
	render(){
		return (
			<Fragment>
				<div style={{marginTop:'20px',marginLeft:'20px'}}>
    				<Input 
    				value={this.props.inputValue} 
    				placeholder="input info" 
    				style={{width:'300px'}}
    				onChange={this.props.changeval}
    				></Input>
    				<Button
    				onClick={this.props.submitList}>submit</Button>
				</div>
				<List
				  style={{marginTop:'20px',marginLeft:'20px',width:'300px'}}
                  size="large"
                  bordered
                  dataSource={this.props.list}
                  renderItem={(item,index) => 
                  <List.Item
                  onClick={()=>{
                  	this.props.delItem(index)
                  }}
                  >{item}</List.Item>}
                />
			</Fragment>
		)
	}
}


let mapStateToProps=(state)=>{
	return {
		inputValue:state.inputValue,
		list:state.list
	}
}

let mapDispatchToProps=(dispatch)=>{
	return {
		changeval(e){
			let action={
				type:CHANGE_INPUT_VALUE,
				value:e.target.value
			}
			dispatch(action)
		},
		submitList(){
			let action={
				type:CHANGE_LIST_DATA
			}
			dispatch(action)
		},
		delItem(index){
			let action={
				type:DEL_THIS_ITEM,
				index
			}
			dispatch(action)
		}
	}
}


export default connect(mapStateToProps,mapDispatchToProps)(Todolist)