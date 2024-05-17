
import { Link } from "react-router-dom";
import SignupForm from "../feature/authetication/SignupForm";
import AuthLayout from "../UI/AuthLayout";

export default function Signup(){
    return (
			<AuthLayout>
				<p className="text-center text-xl mb-5">Please Signup to continue</p>
				<SignupForm />

				<p className="pt-4 text-base font-medium text-center">
					Already have an account?
					<Link to="/auth/login" className="text-blue-700">
						Login
					</Link>
				</p>
			</AuthLayout>
		);
}