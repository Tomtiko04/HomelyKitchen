import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export function useLogin() {
	const navigate = useNavigate();
	const queryClient = useQueryClient();

	const { mutate: login, isPending: isLogin } = useMutation({
		mutationFn: ({ email, password }) =>
			loginApi({
				email,
				password,
			}),
		onSuccess: (user) => {
			queryClient.setQueryData(["user"], user.user);
			Cookies.set("userEmail", user?.user.user_metadata.email);
			Cookies.set("authenticated", user?.user.aud);
			Cookies.set("userId", user?.user.user_metadata.sub);
			Cookies.set("userName", user?.user.user_metadata.userName);
			navigate("/home", { replace: true });
			toast.success(user.user.aud);
		},
		onError: (err) => {
			toast.error(err.message);
		},
		retry: false,
	});

	return { login, isLogin};
}
