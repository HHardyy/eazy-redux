import React,{Fragment} from 'react'
import {Input,Button,List} from 'antd'

const TodoListUI=(props)=>{
	return (
			<Fragment>
				<div style={{marginTop:'20px',marginLeft:'20px'}}>
    				<Input 
    				value={props.inputValue} 
    				placeholder="input info" 
    				style={{width:'300px'}}
    				onChange={props.handleFunc}
    				></Input>
    				<Button
    				onClick={props.handleSubmit}
    				>submit</Button>
				</div>
				<List
				  style={{marginTop:'20px',marginLeft:'20px',width:'300px'}}
                  size="large"
                  bordered
                  dataSource={props.list}
                  renderItem={(item,index) => <List.Item onClick={()=>{
                  	props.handleDelItem(index)
                  }}>{item}</List.Item>}
                />
			</Fragment>)
}

export default TodoListUI