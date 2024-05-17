// import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types"
// import Button from "./Button";


export default function ErrorFallback({error}) {
    // const navigate = useNavigate()
  return (
		<div className="bg-slate-400 flex justify-center items-center w-auto mx-auto h-auto w-2/3">
			<div>
				<h1>Something went wrong</h1>
				<p>{error.message}</p>
				{/* <Button type="primary" onClick={()=>navigate("/home")}>Go back</Button> */}
			</div>
		</div>
	);
}

ErrorFallback.propTypes = {
    error: PropTypes.any,
}
