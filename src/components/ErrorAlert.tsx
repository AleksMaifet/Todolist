import React from "react";
import {useDispatch} from "react-redux";
import {isErrorAC} from "../reducer/AppReducer";
import {Snackbar} from "@material-ui/core";
import {Alert} from "@material-ui/lab";


type ErrorAlertType = {
	errorStatus:string | null
}


export const ErrorAlert = React.memo(({errorStatus}:ErrorAlertType) => {
	const dispatch = useDispatch()
	const styleAlert = {
		backgroundColor:'red'
	}
	const isOpen = errorStatus != null
	const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
		if (reason === 'clickaway') {
			return;
		}
		dispatch(isErrorAC(null))
	};

	return (
		<>
			<Snackbar open={isOpen} autoHideDuration={6000} onClose={handleClose}>
				<Alert style={styleAlert} onClose={handleClose} variant="filled" severity="error">
					{errorStatus} 😠
				</Alert>
			</Snackbar>
		</>
	)
})