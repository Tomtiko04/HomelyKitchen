import Button from "../../UI/Button";
import Input from "../../UI/Input";

import { useSignup } from "./useSignup";
import { useState } from "react";
import Loader from "../../UI/Loader";

export default function SignupForm() {
	const [userName, setUserName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [userNameError, setUserNameError] = useState("");
	const [emailError, setEmailError] = useState("");
	const [passwordError, setPasswordError] = useState("");
	// const [passwordConfirm, setPasswordConfirm] = useState("");

	const {  signup, isSignup } = useSignup();

	function handleSubmit(e) {
		e.preventDefault();
		if (validate()) {
			signup({
				userName,
				email,
				password,
			});
			setUserName("");
			setEmail("");
			setPassword("");
		}
		// setPasswordConfirm("");
	}

	function validate() {
		let isValid = true;

		if (!userName.trim()) {
			setUserNameError("Username is required");
			isValid = false;
		} else {
			setUserNameError("");
		}

		if (!email.trim()) {
			setEmailError("Email is required");
			isValid = false;
		} else {
			setEmailError("");
		}

		if (!password.trim()) {
			setPasswordError("Password is required");
			isValid = false;
		} else {
			setPasswordError("");
		}

		return isValid;
	}

	return (
		<form onSubmit={handleSubmit}>
			<Input
				type="text"
				placeholder="Enter Username"
				disable={isSignup}
				maxLength={7}
				value={userName}
				onChange={(e) => setUserName(e.target.value)}
				name="userName"
			/>
			{userNameError && <p className="text-red-500 mt-[-8px]">{userNameError}</p>}
			<Input
				type="email"
				placeholder="Enter Email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				disable={isSignup}
				name="email"
			/>
			{emailError && <p className="text-red-500 mt-[-8px]">{emailError}</p>}
			<Input
				type="password"
				placeholder="Enter Password"
				disable={isSignup}
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				name="password"
			/>
			{passwordError && <p className="text-red-500 mt-[-8px]">{passwordError}</p>}
			{/* <Input
				type="password"
				placeholder="Confirm Password"
				disable={isSignup}
				value={passwordConfirm === password}
				onChange={(e) => setPasswordConfirm(e.target.value)}
				required={true}
			/> */}
			
			<Button type="secondary" disabled={!userName.trim() || !email.trim() || !password.trim() === " " || isSignup}>
				{!isSignup ? "Sign Up" : <Loader />}
			</Button>
			
		</form>
	);
}
