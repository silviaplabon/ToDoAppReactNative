import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = [
    // { id: 1, title: 'todo1', completed: false },
    // { id: 2, title: 'todo2', completed: false },
    // { id: 3, title: 'todo3', completed: true },
]

export const getToDoAsync = createAsyncThunk(
    'todos/getTodosAsync',
    async (payload) => {
        const response = await fetch('https://frozen-meadow-02730.herokuapp.com/all_ToDo_List?email='+payload.email);
        if (response.ok) {
            const todos = await response.json();
            return { todos }
        }
    }
)
export const addToDoAsync = createAsyncThunk(
    'todos/addToDoAsync',
    async (payload) => {
        const response = await fetch('https://frozen-meadow-02730.herokuapp.com/add_To_Do', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title: payload.title, completed: payload.completed, email:payload.email })
        });

        if (response.ok) {
            const todo = await response.json();
            return { todo }
        }
    }
)
export const toggleCompleteAsync = createAsyncThunk(
    'todos/toggleToDoAsync',
    async (payload) => {
        const response = await fetch(`https://frozen-meadow-02730.herokuapp.com/edit_To_Do/${payload.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ completed: payload.completed })
        });

        if (response.ok) {
            const todo = await response.json();
            return { todo }
        }
    }
)
export const deleteToDoAsync = createAsyncThunk(
    'todos/deleteToDoAsync',
    async (payload) => {
        const response = await fetch(`https://frozen-meadow-02730.herokuapp.com/delete_To_Do/${payload.id}`, {
            method: 'DELETE',
        });
        if (response.ok) {
            const todo = await response.json();
            return { todo}
        }

    })


const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addToDo(state, action) {
            const newTodo = {
                title: action.payload.title,
                completed: false,
            }
            state.push(newTodo)
        },
        toggleComplete: (state, action) => {
            const index = state.findIndex(
                (todo) => todo.id === action.payload.id
            );
            state[index].completed = action.payload.completed;
        },
        deleteToDo: (state, action) => {
            return state.filter((todo) => todo.id !== action.payload.id)
        }

    },
    extraReducers: {
        [getToDoAsync.fulfilled]: (state, action) => {//after fulfilled
            return action.payload.todos;
        },
        [getToDoAsync.pending]: (state, action) => {//after fulfilled
        },
        [addToDoAsync.fulfilled]: (state, action) => {//after fulfilled
            state.push(action.payload.todo)
        },
        [toggleCompleteAsync.fulfilled]: (state, action) => {
            const index = state.findIndex(
                (todo) => todo.id === action.payload.todo.id
            );
            state[index].completed = action.payload.todo.completed;
        },
    }
})
export const { addToDo, toggleComplete, deleteToDo } = todoSlice.actions
export default todoSlice.reducer;