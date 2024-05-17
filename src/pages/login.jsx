import AuthLayout from "../UI/AuthLayout";
import LoginForm from "../feature/authetication/LoginForm";
import { Link } from "react-router-dom";

export default function Login(){
    return (
			<AuthLayout>
				{/* <h1 className="text-center font-bold text-2xl">Login</h1> */}
				<p className="text-center text-xl mb-5">Please Login to continue</p>
				<LoginForm />
				<p className="pt-4 text-base font-medium text-center">
					Not registered yet?
					<Link to="/auth/signup" className="text-blue-700">
						Create an Account
					</Link>
				</p>
			</AuthLayout>
		);
}
