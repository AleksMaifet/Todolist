import React from "react";
import {Send} from "@material-ui/icons";
import {Button} from "@material-ui/core";
import {valueType} from "../reducer/TodoListReducer";

type ButtonType = {
	onClick: () => void
	name:string
	filter?:valueType
	color?:string
}

export const ButtonBody = React.memo((props:ButtonType) => {
	const callback = () => props.onClick();
	const changeColorButton = props.name === props.filter ? 'primary' : 'inherit';
	return (
	<Button endIcon={<Send />} variant="contained" color={changeColorButton} onClick={callback}>{props.name}</Button>
	)
})
