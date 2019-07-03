
import {CHANGE_INPUT_VALUE,CHANGE_LIST_DATA,DEL_THIS_ITEM,INIT_LIST} from './actionTypes.js'
const initState={
	inputValue:'',
	list:[]
}

export default (state=initState,action)=>{
	if (action.type===CHANGE_INPUT_VALUE) {
		let newState=JSON.parse(JSON.stringify(state))
		newState.inputValue=action.value
		return newState
	}
	if (action.type===CHANGE_LIST_DATA) {
		let newState=JSON.parse(JSON.stringify(state))
		newState.list.push(newState.inputValue)
		newState.inputValue=''
		return newState
	}
	if (action.type===DEL_THIS_ITEM) {
		let newState=JSON.parse(JSON.stringify(state))
		newState.list.splice(action.index,1)
		return newState
	}
	if (action.type===INIT_LIST) {
		console.log(action.val);
		let newState=JSON.parse(JSON.stringify(state))
		newState.list=[...action.val]
		return newState
	}
	return state
}