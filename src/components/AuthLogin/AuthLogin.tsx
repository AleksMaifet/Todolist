import React from "react";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import {FormikErrors, useFormik} from "formik";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import FormGroup from "@material-ui/core/FormGroup";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from "@material-ui/core/Paper";
import {useDispatch, useSelector} from "react-redux";
import {rootReducersType} from "../../reducerRedux/ReducerRedux";
import {Navigate} from "react-router-dom";
import {PATH} from "../Routes/Routes";
import {isLoggedInTC} from "../../reducer/AuthReducer";

export type FormikType = {
	email: string
	password: string
	rememberMe: boolean
}

export const AuthLogin = () => {
	const dispatch = useDispatch()
	const authLogin = useSelector<rootReducersType, boolean>(state => state.app.dataForm.authMe)

	const validate = (values: FormikType) => {

		const errors: FormikErrors<FormikType> = {};
		if (!values.email) {
			errors.email = 'Required';
		} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
			errors.email = 'Invalid email address';
		}
		if (!values.password) {
			errors.password = 'Invalid email address';
		}
		return errors;
	};

	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
			rememberMe: false
		},
		validate,
		onSubmit: values => {
			dispatch(isLoggedInTC(values))
		},
	})

	if(authLogin){
		return <Navigate to={PATH.TODOLIST}/>
	}

	return (
		<div style={{display: "flex", justifyContent: "center",marginTop: "40px"}}>
			<div>
				<Paper elevation={3} style={{padding: '20px'}}>
				<form onSubmit={formik.handleSubmit}>
					<FormControl>
						<FormLabel>
							<p>Email: aleksmaifet@gmail.com</p>
							<p>Password: Free</p>
						</FormLabel>
						<div style={{display: "flex", flexDirection: "column", alignItems: "center", margin: "30px 0"}}>
							<Avatar style={{backgroundColor: "red", marginBottom: "20px"}}>
								<LockOutlinedIcon/>
							</Avatar>
							<Typography component="h1" variant="h5">
								Sign in
							</Typography>
						</div>
						<FormGroup>
							<TextField label={formik.errors.email && formik.touched.email ? formik.errors.email : "Email"}
												 margin="normal"
												 error={!!formik.errors.email && !!formik.touched.email}
												 {...formik.getFieldProps("email")}
							/>
							<TextField type="password"
												 autoComplete="on"
												 label={"Password"}
												 margin="normal"
												 error={!!formik.errors.password && !!formik.touched.password}
												 {...formik.getFieldProps("password")}
							/>
							<FormControlLabel
								style={{margin: "20px 0"}}
								label={"Remember me"}
								control={<Checkbox/>}
								{...formik.getFieldProps("rememberMe")}
							/>
							<Button
								type={"submit"}
								variant={"contained"}
								color={"primary"}>
								Login
							</Button>
						</FormGroup>
					</FormControl>
				</form>
				</Paper>
			</div>
		</div>
	);
}
