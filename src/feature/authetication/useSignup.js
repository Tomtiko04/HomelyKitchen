import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useSignup() {
	const navigate = useNavigate()
	const { mutate: signup, isPending: isSignup } = useMutation({
		mutationFn: ({userName, email, password}) => signupApi({
			userName,
			email,
			password
		}),
		onSuccess: () => {
			toast.success(
				"Your account has been successfully created! Please proceed to log in with your credentials."
			);
			navigate("/auth/login", {replace: true})
		},
		onError: (err) => {
			toast.error(err.message)
		},
		retry: false,
	});

	return { signup, isSignup };
}
