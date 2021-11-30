import React from "react";
import Box from "@material-ui/core/Box";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import {Avatar} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {rootReducersType} from "../reducerRedux/ReducerRedux";
import {isLoggedOutTC} from "../reducer/AuthReducer";


export default function MenuAppBar() {
	const isAuth = useSelector<rootReducersType,boolean>(state => state.app.dataForm.authMe)
	const dispatch = useDispatch()

	const handleChange = () => {
		dispatch(isLoggedOutTC())
	};

	return (
		<Box sx={{flexGrow: 1}}>
			<FormGroup>
				<FormControlLabel
					control={
						<Switch
							checked={isAuth}
							onChange={handleChange}
							aria-label="login switch"
						/>
					}
					label={isAuth ? 'Logout' : 'Login'}
				/>
			</FormGroup>
			<AppBar position="static">
				<Toolbar style={{justifyContent:"space-between"}}>
					<div style={{display:"flex",alignItems:"center"}}>
						<IconButton
							size="medium"
							edge="start"
							color="inherit"
							aria-label="menu"
						>
							<MenuIcon/>
						</IconButton>
						<Typography variant="h6">
							Todolist
						</Typography>
					</div>
					{isAuth && (
						<div>
							<IconButton
								size="medium"
								aria-label="account of current user"
								aria-controls="menu-appbar"
								aria-haspopup="true"
								color="inherit"
							>
								<Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
							</IconButton>
						</div>
					)}
				</Toolbar>
			</AppBar>
		</Box>
	);
}