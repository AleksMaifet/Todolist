import {authInitialisationAPI} from "../ApiTodolists/ApiTodolist";
import {setTodolistsTC} from "./TodoListReducer";
import {Dispatch} from "redux";

export type StatusType = 'loading' | 'success';

export enum ResultCodeType {
	OK =0,
	Error=1,
}

export type dataFormType = {
	id: null | number
	email: null | string
	login: null | string
	authMe: boolean
}

export type InitialStateType = {
	status: StatusType
	error: string | null
	dataForm: dataFormType
	spinner:boolean
}

const initialState:InitialStateType = {
	status:'success',
	error:null,
	dataForm:{
		id:null,
		email: null,
		login: null,
		authMe:false,
	},
	spinner:true
}


export const AppReducer = (state=initialState, action:ActionAppReducerType):InitialStateType => {
	switch (action.type) {
		case 'APP/LOAD-PROGRESS':
			return {...state,
			...action.payload}
		case 'APP/ERROR-STATUS'	:
			return {...state,
				...action.payload
			}
		case "APP/INITIALIZATION":
			return {
				...state,
				dataForm:action.dataForm
			}
		case "APP/SPINNER":
			return {
				...state,
				spinner:action.spinner
			}
		default:
			return state
	}
}


export type ActionAppReducerType =
	ReturnType<typeof isLoadAC>
	| ReturnType<typeof isErrorAC>
	| ReturnType<typeof isInitializationAC>
	| ReturnType<typeof spinnerAC>

export const isLoadAC = (status:StatusType) => {
	return {
		type:'APP/LOAD-PROGRESS',
		payload:{
			status
		}
	} as const
}

export const isErrorAC = (error:string | null) => {
	return {
		type: 'APP/ERROR-STATUS',
		payload:{
			error
		}
	} as const
}

export const isInitializationAC = (dataForm:dataFormType) => {
	return {
		type: 'APP/INITIALIZATION',
		dataForm
	} as const
}

export const spinnerAC = (spinner:boolean) => {
	return {
		type: 'APP/SPINNER',
		spinner
	} as const
}

export const isInitializationTC = () => {
	return async (dispatch: Dispatch<any>) => {
		const {data} = await authInitialisationAPI.authMe()
		const {data: item, resultCode, messages} = data
		if (resultCode === ResultCodeType.OK) {
			dispatch(isInitializationAC({...item, authMe: true}))
			dispatch(setTodolistsTC())
		} else {
			dispatch(isErrorAC(messages[0]))
		}
		dispatch(spinnerAC(false))
	}
}