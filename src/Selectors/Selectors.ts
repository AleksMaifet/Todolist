import {rootReducersType} from "../reducerRedux/ReducerRedux";


export const todolistsState = (state:rootReducersType) => state.todolist

export const error = (state:rootReducersType) => state.app.error