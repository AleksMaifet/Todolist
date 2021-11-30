import {applyMiddleware, combineReducers, createStore} from "redux";
import {TodoListReducer} from "../reducer/TodoListReducer";
import {TaskReducer} from "../reducer/TaskReducer";
import thunk from "redux-thunk";
import {AppReducer} from "../reducer/AppReducer";
import {AuthReducer} from "../reducer/AuthReducer";


const rootReducer = combineReducers ({
	todolist: TodoListReducer,
	tasks: TaskReducer,
	app: AppReducer,
	auth: AuthReducer,
})



export type rootReducersType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer,applyMiddleware(thunk));


//@ts-ignore
window.store=store
