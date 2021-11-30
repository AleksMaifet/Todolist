import React, {ChangeEvent} from "react";
import {EditableSpan} from "./EditableSpan";
import {IconButton} from "@material-ui/core";
import {Delete} from "@material-ui/icons";
import {TaskStatus, TaskType, TaskTypeHandler} from "../reducer/TaskReducer";


type TasksType = {
	task: TaskTypeHandler
	onClickHandler: (id: string) => void
	onChangeHandler: (task:TaskType) => void
	changeTaskTitleHandler: (task:TaskType) => void
}


export const Tasks = React.memo((props: TasksType) => {
	const {task, onClickHandler,onChangeHandler,changeTaskTitleHandler} = props


	return <li className={task.status === TaskStatus.Completed ? "is-done" : ""}>
		<input type="checkbox" onChange={(e: ChangeEvent<HTMLInputElement>) => {
			let newIsDoneValue = e.currentTarget.checked;
			onChangeHandler({...task,status: newIsDoneValue ? TaskStatus.Completed : TaskStatus.New})
		}}
					 checked={task.status === TaskStatus.Completed}/>
		<EditableSpan spanTitle={task.title} callback={(title: string) => changeTaskTitleHandler({...task,title})}/>
		<IconButton disabled={task.entityStatus === 'loading'} onClick={() => onClickHandler(task.id)} size="small">
			<Delete fontSize="small"/>
		</IconButton>
	</li>
})



