import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	value : "0"
}

const writeSlice = createSlice({
	name: 'read',
	initialState,
	reducers: {
		addStuffs: (state, action) => {
			if(parseInt(state.value) === 0){
				state.value = action.payload.toString();
			}
			else {
				state.value = state.value + action.payload;
				
			}
		},
		addOperator: (state, action) => {
			// console.log(action.payload)
			if(typeof(parseInt(state.value[0])) === "int"){
				console.log("cant add")
			}
			else if(state.value[state.value.length - 1] === action.payload){
				console.log("Its Same")
			}
			else {
				state.value = state.value + action.payload.toString();
			}
		}, 
		removeStuff: (state, action) => {
			state.value = state.value.slice(state.value[state.value.length], state.value.length - 1)
		},
		clearStuff: (state, action) => {
			state.value = "0"
		}
	}
})
export const { addStuffs, addOperator, removeStuff, clearStuff } = writeSlice.actions;
export default writeSlice.reducer;