import React from "react";
import {Navigate,Routes, Route} from "react-router-dom";
import {TodolistDemo} from "../TodolistDemo";
import {PrivateRouter} from "./PrivateRouter";
import {AuthLogin} from "../AuthLogin/AuthLogin";


export const PATH = {
	TODOLIST:'/Todolist',
	LOGIN:'/login',
}


export const RoutesBlock = () => {
	return (
		<div>
			<Routes>
				<Route path={'/'} element={<AuthLogin/>}/>
				<Route path={'/Todolist'} element={
					<PrivateRouter>
						<TodolistDemo/>
					</PrivateRouter>
				}/>
				<Route path={PATH.TODOLIST} element={<TodolistDemo/>}/>
				<Route path={PATH.LOGIN} element={<AuthLogin/>}/>
			</Routes>
		</div>
	)
}