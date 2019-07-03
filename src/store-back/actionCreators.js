import {CHANGE_INPUT_VALUE,CHANGE_LIST_DATA,DEL_THIS_ITEM,INIT_LIST} from './actionTypes.js'
import axios from 'axios'
export let setINitValue=(value)=>({
	type:CHANGE_INPUT_VALUE,
	value
})

export let changeListData=()=>({
	type:CHANGE_LIST_DATA
})

export let delThisItem=(index)=>({
	type:DEL_THIS_ITEM,
	index
})

export let initList=(val)=>({
	type:INIT_LIST,
	val
})

export let getInitListFunc=()=>{
	return dispath=>{
		axios.get('/api')
		.then(res=>{
			let data=res.data.split(',')
			dispath(initList(data))
		})
	}
}