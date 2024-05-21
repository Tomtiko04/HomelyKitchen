import { useState } from "react";

import Input from "../../UI/Input"
import Button from "../../UI/Button";
import { useLogin } from "./useLogin";
import Loader from "../../UI/Loader";


export default function LoginForm() {
	const { login, isLogin } = useLogin();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	function handleSubmit(e) {
		e.preventDefault();
		login(
			{ email, password },
			{
				onSettled: () => {
					setEmail("");
					setPassword("");
				},
			}
		);
	}

	return (
		<form onSubmit={handleSubmit}>
			<Input
				type="email"
				placeholder="Enter Email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				disabled={isLogin}
			/>
			<Input
				type="password"
				placeholder="Enter Password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				disabled={isLogin}
			/>
			<Button type="secondary" disabled={!email.trim() || !password.trim() === " " || isLogin}>
				{!isLogin ? "Login" : <Loader />}
			</Button>
		</form>
	);
}
