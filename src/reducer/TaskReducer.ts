import {AddTodolistACType, RemoveTodoListACType, RequestStatusType} from "./TodoListReducer";
import {Dispatch} from "redux";
import {AxiosUpdateTaskModule, todolistsAPI} from "../ApiTodolists/ApiTodolist";
import {isErrorAC, isLoadAC, ResultCodeType} from "./AppReducer";

export type TasksStateType = {
	[key: string]: Array<TaskTypeHandler>
}


export enum TaskStatus {
	New = 0,
	InProgress = 1,
	Completed = 2,
	Draft = 3,
}
export enum TaskPriorities {
	Low = 0,
	Middle = 1,
	Hi = 2,
	Urgently = 3,
	Later = 4,
}

export type TaskType = {
	description: string
	title: string
	status: TaskStatus
	priority: TaskPriorities
	startDate: string
	deadline: string
	id: string
	todoListId:string
	order: number
	addedDate: string
}

export type TaskTypeHandler =  TaskType & {
	entityStatus:RequestStatusType
}
const initialization:TasksStateType = {}

export const TaskReducer = (state = initialization, action: TaskHandlerTypes): TasksStateType => {
	switch (action.type) {
		case "REMOVE-TASK":
			return {...state, [action.todolistID]: state[action.todolistID].filter(t => t.id !== action.taskId)}
		case "ADD-TASK":
			return {
				...state,
				[action.todolistID] : [{...action.task,entityStatus:'idle'},...state[action.todolistID]]
			}
		case "UPDATE-TASK":
			return {
				...state,
				[action.todolistID]: state[action.todolistID].map(b => b.id === action.TaskId ? {
					...b,
					...action.module
				} : b)
			}
		case "ADD-TODOLIST":
			return {
				...state,
				[action.todolist.id]: []
			}
		case "SET-TASK":
			return {
				...state, [action.todolistID]: action.tasks.map(t => ({...t, entityStatus: 'idle'}))
			}
		case "REMOVE-TODOLISTS":
			delete state[action.todolistID]
			return state
		case "CHANGE-TASK-ENTITY-STATUS":
			return {
				...state,
				[action.todolistID]: state[action.todolistID].map(t => t.id === action.taskId ? {
					...t, entityStatus: action.entityStatus
				} : t)
			}
		default:
			return state
	}
}


export type TaskHandlerTypes =
	RemoveTaskACType
	| AddTaskACType
	| AddTodolistACType
	| ChangeTaskTitleACType
	| RemoveTodoListACType
	| SetTaskACType
	| changeTaskEntityStatusType

export type RemoveTaskACType = ReturnType<typeof removeTaskAC>

export const removeTaskAC = (taskId: string, todolistID: string) => {
	return {
		type: 'REMOVE-TASK',
		taskId,
		todolistID
	} as const
}

export type AddTaskACType = ReturnType<typeof addTaskAC>

export const addTaskAC = (todolistID:string,task:TaskType) => {
	return {
		type: 'ADD-TASK',
		todolistID,
		task,
	} as const
}

export type ChangeTaskTitleACType = ReturnType<typeof updateTaskAC>

export const updateTaskAC = (TaskId: string, module:AxiosUpdateTaskModule, todolistID: string) => {
	return {
		type: 'UPDATE-TASK',
		TaskId,
		module,
		todolistID
	} as const
}

export type SetTaskACType = ReturnType<typeof setTaskAC>

export const setTaskAC = (todolistID:string,tasks:TaskType[]) => {
	return {
		type: 'SET-TASK',
		todolistID,
		tasks,
	} as const
}

export type changeTaskEntityStatusType = ReturnType<typeof changeTaskEntityStatusAC>

export const changeTaskEntityStatusAC = (taskId:string,todolistID: string,entityStatus:RequestStatusType) => {
	return {
		type: 'CHANGE-TASK-ENTITY-STATUS',
		taskId,
		todolistID,
		entityStatus,
	} as const
}

export const getTasksTC = (id:string) => {
	return async (dispatch:Dispatch) => {
		dispatch(isLoadAC('loading'))
		const {data} = await todolistsAPI.getTasks(id)
		const {error, items, totalCount} = data
		dispatch(setTaskAC(id, items))
		dispatch(isLoadAC('success'))
	}
}


export const createTaskTC = (title:string,todolistID:string) => {
	return async (dispatch:Dispatch) => {
		dispatch(isLoadAC('loading'))
		try{
			const {data} = await todolistsAPI.createTask(todolistID, title)
			const {data: {item}, messages, resultCode} = data
			if(resultCode === ResultCodeType.OK) {
				dispatch(addTaskAC(todolistID, item))
			}
			else {
				dispatch(isErrorAC(messages[0]))
			}
		}
		catch (e){
			dispatch(isErrorAC('Authorization has been denied for this request.'))
		}
		finally {
			dispatch(isLoadAC('success'))
		}
	}
}

export const deleteTaskTC = (taskId:string,todolistID:string) => {
	return async (dispatch:Dispatch) => {
		dispatch(isLoadAC('loading'))
		dispatch(changeTaskEntityStatusAC(taskId,todolistID,'loading'))
		await todolistsAPI.deleteTask(todolistID, taskId);
		dispatch(removeTaskAC(taskId, todolistID));
		dispatch(isLoadAC('success'))
	}
}

export const updateTaskTC = (task:TaskType) => {
	return async (dispatch: Dispatch) => {
		dispatch(isLoadAC('loading'))
			const module: AxiosUpdateTaskModule = {
				title:task.title,
				description: task.description,
				status:task.status,
				priority: task.priority,
				startDate: task.startDate,
				deadline: task.deadline,
			}
			const {data} = await todolistsAPI.updateTask(task.todoListId,task.id,module)
			const {data: {item},messages,resultCode} = data
			dispatch(updateTaskAC(task.id, item, task.todoListId))
			dispatch(isLoadAC('success'))
		}
	}