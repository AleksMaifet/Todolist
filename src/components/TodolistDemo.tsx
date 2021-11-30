import React, {useCallback} from "react";
import {Grid, Paper} from "@material-ui/core";
import {AddItemForm} from "./AddItemForm";
import {useDispatch, useSelector} from "react-redux";
import {todolistsState} from "../Selectors/Selectors";
import {Todolist} from "../TodoList";
import {createTodolistTC} from "../reducer/TodoListReducer";


export const TodolistDemo = () => {
	const dispatch = useDispatch();
	const todolist = useSelector(todolistsState);

	const addTodolist = useCallback( async (todolistTitle: string) => {
		dispatch(createTodolistTC(todolistTitle))
	},[dispatch])

	const todolistsComponents = todolist.map(tl => {
		return (
			<Grid key={tl.id} item>
				<Paper elevation={3} style={{padding: '20px'}}>
					<Todolist
						key={tl.id}
						id={tl.id}
					/>
				</Paper>
			</Grid>
		)
	})

	return (
		<div className='App'>
			<Grid container style={{margin: '50px 0', justifyContent: 'center'}}>
				<AddItemForm callBack={addTodolist}/>
			</Grid>
			<Grid container spacing={6}>
				{todolistsComponents}
			</Grid>
		</div>
	)
}