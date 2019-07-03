import {CHANGE_INPUT_VALUE,CHANGE_LIST_DATA,DEL_THIS_ITEM} from './actionTypes.js'
let initState={
	inputValue:'',
	list:['hardy']
}

export default (state=initState,action)=>{
	if (action.type===CHANGE_INPUT_VALUE) {
		let newState=JSON.parse(JSON.stringify(state))
		newState.inputValue=action.value
		return newState
	}
	if (action.type===CHANGE_LIST_DATA) {
		let newState=JSON.parse(JSON.stringify(state))
		newState.list.push(state.inputValue)
		newState.inputValue=''
		return newState
	}
	if (action.type===DEL_THIS_ITEM) {
		let newState=JSON.parse(JSON.stringify(state))
		newState.list.splice(action.index,1)
		return newState
	}
	return state
}
