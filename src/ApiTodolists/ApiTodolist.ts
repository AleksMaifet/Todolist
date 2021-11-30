import axios from "axios";
import {TaskPriorities, TaskStatus, TaskType} from "../reducer/TaskReducer";
import {FormikType} from "../components/AuthLogin/AuthLogin";

type AxiosAuthMe = {
	id:number,
	email:string,
	login:string,
}

type AxiosGetTodolists = {
	id: string
	addedDate:string
	order: number
	title: string
}
type AxiosResponseType<D> = {
	resultCode: number
	messages: string[]
	data: D
}
type AxiosGetTasks = {
	items: TaskType[]
	totalCount: number
	error: string
}

export type AxiosUpdateTaskModule = {
	title: string
	description:string
	status: TaskStatus
	priority: TaskPriorities
	startDate: string
	deadline: string
}

const initial = axios.create(
	{
	withCredentials: true,
	headers: {
		'API-KEY': '5c7c1e5a-aa4c-4b00-a92b-b6f5df506a28'
	},
	baseURL:'https://social-network.samuraijs.com/api/1.1/'
}
)

export const todolistsAPI = {
	getTodolists() {
		return initial.get<Array<AxiosGetTodolists>>('todo-lists',{})
	},
	createTodolist(title:string) {
		return initial.post<AxiosResponseType<{item:AxiosGetTodolists}>>('todo-lists', {title}, {})
	},
	deleteTodolist(todolistId:string) {
		return initial.delete<AxiosResponseType<{}>>(`todo-lists/${todolistId}`,  {})
	},
	updateTodolist(todolistID:string,title:string) {
		return initial.put<AxiosResponseType<{}>>(`todo-lists/${todolistID}`,{title},  {})
	},
	getTasks(todolistId:string) {
		return initial.get<AxiosGetTasks>(`todo-lists/${todolistId}/tasks`,  {})
	},
	createTask(todolistId:string,title:string) {
		return initial.post<AxiosResponseType<{item:TaskType}>>(`todo-lists/${todolistId}/tasks`,  {title},{})
	},
	deleteTask(todolistId:string,taskId:string) {
		return initial.delete<AxiosResponseType<{}>>(`todo-lists/${todolistId}/tasks/${taskId}`,  {})
	},
	updateTask(todolistID:string,taskId:string,module:AxiosUpdateTaskModule) {
		return initial.put<AxiosResponseType<{item:TaskType}>>(`todo-lists/${todolistID}/tasks/${taskId}`,{...module},  {})
	},
}
export const authInitialisationAPI = {
	authMe() {
		return initial.get<AxiosResponseType<AxiosAuthMe>>('/auth/me', {})
	},
	logIn(logInForm:FormikType) {
		return initial.post<AxiosResponseType<{ userId: string }>>('/auth/login', {...logInForm}, {})
	},
	logOut() {
		return initial.delete<AxiosResponseType<{}>>('/auth/login', {})
	}
}