import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Button({ children, disabled, to, type, onClick, ...rest }) {
	const base =
		"bg-orange-500 text-white text-center text-base font-semibold px-6 py-2 block transition-colors duration-300 focus:bg-orange-100 focus:text-black focus:outline-none focus:ring focus:ring-orange-300 focus:ring-offset-2 disabled:cursor-not-allowed tracking-wide";
		const styles = {
			primary: base + "px-5 py-2 rounded-lg",
			small: base + "px-5 py-2 rounded-lg",
			secondary: base + " w-full text-xl py-3 rounded-lg",
			round: base + " px-2.5 py-1 md:px-3.5 md:py-2 text-sm rounded-full",
		};
	if (to)
		return (
			<Link to={to} className={styles[type]}>
				{children}
			</Link>
		);
	if (onClick)
		return (
			<button onClick={onClick} disabled={disabled} className={styles[type]}>
				{children}
			</button>
		);
	return (
		<button disabled={disabled} className={styles[type]} {...rest}>
			{children}
		</button>
	);
}

Button.propTypes = {
	children: PropTypes.any,
	disabled: PropTypes.any,
	to: PropTypes.any,
	type: PropTypes.any,
	onClick: PropTypes.any,
	rest: PropTypes.any
};
