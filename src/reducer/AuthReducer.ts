import {authInitialisationAPI} from "../ApiTodolists/ApiTodolist";
import {FormikType} from "../components/AuthLogin/AuthLogin";
import {isErrorAC, isInitializationAC, isInitializationTC, ResultCodeType} from "./AppReducer";
import {Dispatch} from "redux";


type InitialStateType = typeof initialState

const initialState = {
	isLoggedIn: false
}

export const AuthReducer = (state=initialState, action:AuthReducerHandlerType):InitialStateType => {
	switch (action.type) {
		case "AUTH/SET-IS-LOGGED-IN":
		case "AUTH/SET-IS-LOGGED-OUT":
			return {
				...state,
				...action.payload
			}
		default:
			return state
	}
}

export type AuthReducerHandlerType = SetIsLoggedInACType | SetIsLoggedOutACType

type 	SetIsLoggedInACType = ReturnType<typeof setIsLoggedInAC>

export const setIsLoggedInAC = (isLogIn: boolean) => {
	return {
		type: 'AUTH/SET-IS-LOGGED-IN',
		payload: {
			isLogIn
		}
	} as const
}

type 	SetIsLoggedOutACType = ReturnType<typeof setIsLoggedOutAC>

export const setIsLoggedOutAC = (isLogIn: boolean) => {
	return {
		type: 'AUTH/SET-IS-LOGGED-OUT',
		payload: {
			isLogIn
		}
	} as const
}

export const isLoggedInTC = (logInForm:FormikType) => {
	return async (dispatch:any) => {
		const {data} = await authInitialisationAPI.logIn(logInForm)
		const {data:userId,resultCode,messages} = data
		if(resultCode === ResultCodeType.OK){
			dispatch(setIsLoggedInAC(true))
			dispatch(isInitializationTC())
		}
		else {
			dispatch(isErrorAC(messages[0]))
		}
	}
}

export const isLoggedOutTC = () => {
	return async (dispatch:Dispatch) => {
		const {data} = await authInitialisationAPI.logOut()
		const {resultCode,messages} = data
		if(resultCode === ResultCodeType.OK){
			dispatch(setIsLoggedOutAC(false))
			dispatch(isInitializationAC({id:null, email:null,login:null,authMe:false}))
		}
		else {
			dispatch(isErrorAC(messages[0]))
		}
	}
}