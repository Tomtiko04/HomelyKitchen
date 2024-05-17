import { useState } from "react";
import toast from "react-hot-toast";
import Button from "../../UI/Button";

export default function NewsLetter() {
	const [value, setValue] = useState("");

	function handleSubmit(e) {
		e.preventDefault();
		if (value.trim() === "") {
			toast.error("Enter an Email Address");
		} else {
			toast.success("Thank you for subscribing to our News Letter");
		}
		setValue("");
	}

	function handleChange(e) {
		setValue(e.target.value);
		console.log(e.target.value);
	}

	return (
		<div className="flex flex-col items-center justify-center gap-y-2 mb-5 px-5 pt-10 md:pt-16 overflow-hidden">
			<h1 className="md:text-[1.7rem] text-[1.5rem] font-medium text-black md:text-center text-left">Subscribe to our Newsletter</h1>
			<p className="text-center text-lg md:text-left">Enter your Email address to get daily offers and news.</p>
			<form
				className="my-8 flex flex-row relative items-center justify-center"
				onSubmit={handleSubmit}>
				<input
					className="border border-gray-400 px-2 py-[0.7em] rounded-lg outline-none focus:border-orange-500 focus:border-2 w-[330px]"
					value={value}
					onChange={handleChange}
					placeholder="Enter Your Email"
				/>
				<div className="right-[4px] absolute">
					<Button
						type="round"
						disabled={value.trim === ""}
						// className={value === "" && "cursor-not-allowed"}
					>
						Subscribe
					</Button>
				</div>
			</form>
		</div>
	);
}
