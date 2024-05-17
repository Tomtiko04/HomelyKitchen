import { BrowserRouter, Navigate, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { QueryCache, QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import LandingPage from "./pages/LandingPage";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/login";
import Signup from "./pages/signup";
import AppLayout from "./UI/AppLayout";
import toast, { Toaster } from "react-hot-toast";
import MenusPage from "./pages/MenusPage";
import { useEffect } from "react";
import ProtectedRoute from "./pages/ProtectedRoute";
import CartPage from "./pages/CartPage";

const queryClient = new QueryClient({
	queryCache: new QueryCache({
		onError: (error) => {
			toast.error(error.message);
		},
	}),
	defaultOptions: {
		queries: {
			// staleTime: 60 * 1000
			staleTime: 0,
		},
	},
});

function App() {
	function RedirectToMenusWithDefaultParams() {
		const navigate = useNavigate();
		const location = useLocation();

		useEffect(() => {
			// Check if the 'type' query param is absent
			if (!location.search.includes("type=")) {
				// Redirect to the same path with the default 'type=all' query param
				navigate(`${location.pathname}?type=all`, { replace: true });
			}
		}, [navigate, location]);

		return <MenusPage />;
	}

	return (
		<>
			<QueryClientProvider client={queryClient}>
				{/* <ReactQueryDevtools initialIsOpen={false} /> */}
				<BrowserRouter>
					<Routes>
						<Route index element={<Navigate replace to="home" />} />
						<Route path="auth/login" element={<Login />} />
						<Route path="auth/signup" element={<Signup />} />
						<Route element={<AppLayout />}>
							<Route path="home" element={<LandingPage />} />
							<Route path="menus/all" element={<ProtectedRoute><RedirectToMenusWithDefaultParams /></ProtectedRoute>}/>
							<Route path="cart" element={<ProtectedRoute><CartPage /></ProtectedRoute>}/>
						</Route>
						<Route path="*" element={<PageNotFound />} />
					</Routes>
				</BrowserRouter>
				<Toaster
					position="top-right"
					gutter={12}
					containerStyle={{ margin: "8px" }}
					toastOptions={{
						success: {
							duration: 3000,
						},
						error: {
							duration: 5000,
						},
						style: {
							fontSize: "16px",
							maxWidth: "500px",
							padding: "16px 24px",
							// backgroundColor: "bg-orange-500",
							// color: "text-white",
						},
					}}
				/>
			</QueryClientProvider>
		</>
	);
}

export default App;
