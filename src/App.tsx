import React, {useCallback, useEffect} from 'react';
import './App.css';
import {Todolist} from "./TodoList";
import {AddItemForm} from "./components/AddItemForm";
import {Container, Grid, Paper} from "@material-ui/core";
import {createTodolistTC, setTodolistsTC} from "./reducer/TodoListReducer";
import {useDispatch, useSelector} from "react-redux";
import {error, todolistsState} from "./Selectors/Selectors";
import {ErrorAlert} from "./components/ErrorAlert";
import MenuAppBar from "./components/AppBar";
import {LinearIndeterminate} from "./components/LinearProgress";


function App() {
	const dispatch = useDispatch();
	const todolist = useSelector(todolistsState);
	const errorStatus = useSelector(error)

	useEffect(() => {
		dispatch(setTodolistsTC())
	}, [dispatch])


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
				<Container fixed>
					<MenuAppBar/>
					<LinearIndeterminate/>
					<div className='App'>
						<Grid container style={{margin: '50px 0', justifyContent: 'center'}}>
							<AddItemForm callBack={addTodolist}/>
						</Grid>
						<Grid container spacing={6}>
							{todolistsComponents}
						</Grid>
						<ErrorAlert errorStatus={errorStatus}/>
					</div>
				</Container>
	);
}

export default App;