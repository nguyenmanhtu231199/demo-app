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
    },
    deleteItem:(state,action)=>{
        console.log(action);
        const index = state.todoList.findIndex(x=> x.id===action.payload.id);
        if(index<0) return;
        state.todoList.splice(index,1);
       
    }
    }
});

export const {savetodo,deleteItem} = Todoslice.actions
export const selectTodoList= state => state.todos.todoList
export default Todoslice.reducer