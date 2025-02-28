import { useNavigate } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";
import Button from "../UI/Button";

export default function PageNotFound() {
	const navigate = useNavigate();

	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-4">
			<FaExclamationTriangle className="text-orange-500 text-6xl mb-4" />

			<h2 className="text-4xl font-bold text-gray-800 mb-2">Oops! Page Not Found</h2>

			<p className="text-gray-600 mb-6">
				The page you’re looking for doesn’t exist or has been moved.
			</p>

			<Button onClick={() => navigate(-1)} type="primary">
				Go Back
			</Button>
		</div>
	);
}
