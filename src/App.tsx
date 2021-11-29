import React, {useEffect} from 'react';
import './App.css';
import {Container} from "@material-ui/core";
import {setTodolistsTC} from "./reducer/TodoListReducer";
import {useDispatch} from "react-redux";
import MenuAppBar from "./components/AppBar";
import {LinearIndeterminate} from "./components/LinearProgress";
import {TodolistDemo} from "./components/TodolistDemo";
import {Routes,Route} from "react-router-dom";
import {AuthLogin} from "./components/AuthLogin/AuthLogin";


function App() {
	const dispatch = useDispatch();


	useEffect(() => {
		dispatch(setTodolistsTC())
	}, [dispatch])


	return (
		<Container fixed>
			<MenuAppBar/>
			<LinearIndeterminate/>
			<Routes>
				<Route path="/Todolist" element={<TodolistDemo/>}/>
				<Route path="/login" element={<AuthLogin/>}/>
			</Routes>
		</Container>
	);
}

export default App;
