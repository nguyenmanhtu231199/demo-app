import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   todoList:[],
}


const Todoslice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
    savetodo:(state,action)=>{
        console.log(action);
        state.todoList.push(action.payload)
    }
    }
});

export const {savetodo} = Todoslice.actions
export const selectTodoList= state => state.todos.todoList
export default Todoslice.reducer