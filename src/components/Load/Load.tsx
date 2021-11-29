import CircularProgress from "@material-ui/core/CircularProgress";


export const IsLoad = () => {
	const CircularStyle = {
		minHeight:"100vh",
		display: "flex",
		justifyContent:"center",
		alignItems:"center",
	}

	return (
	<div style={CircularStyle}>
		<CircularProgress color="primary"/>
	</div>
	)
}