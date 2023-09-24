import { configureStore } from "@reduxjs/toolkit";
import { initState } from "./initState";
import { todosReducer } from "./slices/todosSlice";
import { REDUX_LS_KEY } from "./constants";

const savedTodos = localStorage.getItem(REDUX_LS_KEY);
const preloadedState = savedTodos &&  Array.isArray(JSON.parse(savedTodos)) ? { todos: JSON.parse(savedTodos) } : initState;


export const store = configureStore({
    preloadedState: preloadedState,
    reducer: {
        todos: todosReducer, 
    },
  })

  store.subscribe(() => {
    window.localStorage.setItem(REDUX_LS_KEY, JSON.stringify(store.getState().todos));
  });

  export type RootState = ReturnType<typeof store.getState>

  export type AppDispatch = typeof store.dispatch




  