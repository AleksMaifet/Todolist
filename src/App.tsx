import React, {useEffect} from 'react';
import './App.css';
import {Container} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import MenuAppBar from "./components/AppBar";
import {LinearIndeterminate} from "./components/LinearProgress";
import {RoutesBlock} from './components/Routes/Routes';
import {isInitializationTC} from "./reducer/AppReducer";
import {ErrorAlert} from "./components/ErrorAlert";
import {error} from "./Selectors/Selectors";
import {IsLoad} from "./components/Load/Load";
import {rootReducersType} from "./reducerRedux/ReducerRedux";


function App() {
	const isSpinner = useSelector<rootReducersType, boolean>(state => state.app.spinner)
	const dispatch = useDispatch();
	const errorStatus = useSelector(error)

	useEffect(() => {
		dispatch(isInitializationTC())
	},[dispatch])

	if (isSpinner) {
		return <IsLoad/>
	}

	return (
		<Container fixed>
			<MenuAppBar/>
			<LinearIndeterminate/>
			<RoutesBlock/>
			<ErrorAlert errorStatus={errorStatus}/>
		</Container>
	);
}

export default App;
