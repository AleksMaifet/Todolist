import React from "react";
import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";
import {rootReducersType} from "../../reducerRedux/ReducerRedux";

type PrivateRouterType = {
	children: JSX.Element
}

export const PrivateRouter = ({children, ...rest}: PrivateRouterType) => {
	const authLogin = useSelector<rootReducersType, boolean>(state => state.app.dataForm.authMe)

	if (!authLogin) {
		return <Navigate to='/login'/>
	}
	return children
}