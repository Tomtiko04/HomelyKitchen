import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import './index.css'
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './UI/ErrorFallback.jsx';
import UserProvider from './context/userContext.jsx';



ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<UserProvider>
			<ErrorBoundary FallbackComponent={ErrorFallback}>
				<App />
			</ErrorBoundary>
		</UserProvider>
	</React.StrictMode>
);
//Superbase Homely: OpPq1PtCCaHETGYy