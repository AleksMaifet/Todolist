import React from "react";
import {Box, LinearProgress} from "@material-ui/core";
import {useSelector} from "react-redux";
import {rootReducersType} from "../reducerRedux/ReducerRedux";

export const LinearIndeterminate = () => {
	const isLoad = useSelector<rootReducersType, 'loading' | 'success'>(state => state.app.status)

	const styleLoad: {} = {
		height: '1px',
	};

	return (
		<div style={styleLoad}>
			{isLoad === 'loading' &&
			<Box sx={{width: '100%'}}>
				<LinearProgress/>
			</Box>
			}
		</div>
	);
}