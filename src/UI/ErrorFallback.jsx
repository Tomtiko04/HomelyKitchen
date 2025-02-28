import PropTypes from "prop-types";
import { MdErrorOutline } from "react-icons/md";

export default function ErrorFallback({ error, resetErrorBoundary }) {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-4">
			<MdErrorOutline className="text-red-500 text-6xl mb-4" />

			<h1 className="text-3xl font-bold text-gray-800 mb-2">Oops! Something went wrong</h1>

			<p className="text-gray-600 mb-6">{error.message || "An unexpected error occurred."}</p>

			<button
				onClick={resetErrorBoundary}
				className="px-5 py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition">
				Try Again
			</button>
		</div>
	);
}

ErrorFallback.propTypes = {
	error: PropTypes.any,
	resetErrorBoundary: PropTypes.func.isRequired,
};
