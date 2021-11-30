import {Dispatch} from "redux";
import {todolistsAPI} from "../ApiTodolists/ApiTodolist";
import {isErrorAC, isLoadAC, ResultCodeType} from "./AppReducer";
import {getTasksTC} from "./TaskReducer";

export type valueType = 'All' | 'Active' | 'Completed';
export type RequestStatusType = 'idle' | 'loading';

export type TodolistType = {
	id: string
	title: string
	order: number
	addedDate:string
}

export type TodolistTypeHandler = TodolistType & {
	filter:valueType,
	entityStatus:RequestStatusType
}

const initialization: Array<TodolistTypeHandler> = []

export const TodoListReducer = (state = initialization, action: TodolistHandlerTypes): Array<TodolistTypeHandler> => {
	switch (action.type) {
		case 'CHANGE-TODOLISTS':
			return [...state.map(t => t.id === action.todolistID ? {...t, filter: action.value} : t)]
		case "REMOVE-TODOLISTS":
			return [
				...state.filter(t => t.id !== action.todolistID)
			]
		case "CHANGE-TODOLIST-TITLE":
			return state.map(tl => tl.id === action.todolistID ? {...tl, title: action.title} : tl)
		case "ADD-TODOLIST":
			return [
				{...action.todolist,
					filter: 'All',
					entityStatus:'idle'
				}
				,...state
			]
		case "SET-TODOLIST":
			return action.todolists.map(el => ({...el, filter: 'All',	entityStatus:'idle'}))
		case "CHANGE-TODOLIST-ENTITY-STATUS":
			return state.map(t => t.id === action.todolistID ? {...t,entityStatus:action.entityStatus} : t)
		default:
			return state
	}
}


export type TodolistHandlerTypes =
	ChangeTodoListACType
	| RemoveTodoListACType
	| ChangeTodolistTitleACType
	| AddTodolistACType
	| SetTodolistACType
	| ChangeTodolistEntityStatusACType

export type ChangeTodoListACType = ReturnType<typeof changeTadoListAC>

export const changeTadoListAC = (value: valueType, todolistID: string) => {
	return {
		type: 'CHANGE-TODOLISTS',
		value,
		todolistID
	} as const
}
export type RemoveTodoListACType = ReturnType<typeof removeTodolistAC>

export const removeTodolistAC = (todolistID: string) => {
	return {
		type: 'REMOVE-TODOLISTS',
		todolistID,
	} as const
}

export type ChangeTodolistTitleACType = ReturnType<typeof changeTodolistTitleAC>

export const changeTodolistTitleAC = (title: string, todolistID: string) => {
	return {
		type: "CHANGE-TODOLIST-TITLE",
		title,
		todolistID
	} as const
}

export type AddTodolistACType = ReturnType<typeof addTodolistAC>

export const addTodolistAC = (todolist:TodolistType) => {
	return {
		type: 'ADD-TODOLIST',
			todolist
	} as const
}

export type SetTodolistACType = ReturnType<typeof setTodolistAC>

export const setTodolistAC = (todolists: TodolistType[]) => {
	return {
		type: 'SET-TODOLIST',
		todolists,
	} as const
}

export type ChangeTodolistEntityStatusACType = ReturnType<typeof changeTodolistEntityStatusAC>

export const changeTodolistEntityStatusAC = (todolistID: string,entityStatus:RequestStatusType) => {
	return {
		type: 'CHANGE-TODOLIST-ENTITY-STATUS',
		todolistID,
		entityStatus,
	} as const
}

export const setTodolistsTC = () => {
	return async (dispatch: any) => {
		dispatch(isLoadAC('loading'))
		try {
			const {data} = await todolistsAPI.getTodolists()
			dispatch(setTodolistAC(data))
			data.forEach(el => dispatch(getTasksTC(el.id)))
		}
		catch (error){
			dispatch(isErrorAC('Authorization has been denied for this request.'))
		}
		finally {
			dispatch(isLoadAC('success'))
		}
	}
}

export const createTodolistTC = (todolistTitle:string) => {
	return async (dispatch:Dispatch) => {
		dispatch(isLoadAC('loading'))
		try {
			const {data} = await todolistsAPI.createTodolist(todolistTitle)
			const {data:{item}, messages,resultCode} = data
			if(resultCode === ResultCodeType.OK){
				dispatch(addTodolistAC(item))
			}
			else {
				dispatch(isErrorAC(messages[0]))
			}
		}
		catch (e) {
			dispatch(isErrorAC('Authorization has been denied for this request.'))
		}
		finally {
			dispatch(isLoadAC('success'))
		}
	}
}

export const deleteTodolistTC = (todolistID:string) => {
	return async (dispatch:Dispatch) => {
		dispatch(isLoadAC('loading'))
		dispatch(changeTodolistEntityStatusAC(todolistID,'loading'))
		await todolistsAPI.deleteTodolist(todolistID)
		dispatch(removeTodolistAC(todolistID));
		dispatch(isLoadAC('success'))
	}
}

export const updateTodolistTC = (title:string,todolistID:string) => {
	return async (dispatch:Dispatch) => {
		dispatch(isLoadAC('loading'))
		await todolistsAPI.updateTodolist(todolistID,title)
		dispatch(changeTodolistTitleAC(title,todolistID))
		dispatch(isLoadAC('success'))
	}
}
