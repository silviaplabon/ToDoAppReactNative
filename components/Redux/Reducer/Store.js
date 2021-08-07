import { configureStore, } from '@reduxjs/toolkit'
import ToDoReducer from './ToDoReducer'
import authReducer from './authReducer'
import logger from 'redux-logger'

export const store = configureStore({
    reducer:{
        todos:ToDoReducer,
        auth:authReducer,  
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  })