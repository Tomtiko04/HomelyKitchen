import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import './index.css'
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './UI/ErrorFallback.jsx';
import UserDetailsProvider from './context/userDetailsContext.jsx';



ReactDOM.createRoot(document.getElementById("root")).render(
	<UserDetailsProvider>
		<React.StrictMode>
			<ErrorBoundary FallbackComponent={ErrorFallback}>
				<App />
			</ErrorBoundary>
		</React.StrictMode>
	</UserDetailsProvider>
);
//Superbase Homely: OpPq1PtCCaHETGYy