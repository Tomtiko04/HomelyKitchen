import PropTypes from "prop-types"

Input.propTypes = {
	placeholder: PropTypes.any,
	type: PropTypes.any,
	value: PropTypes.any,
	onChange: PropTypes.any,
	maxLength: PropTypes.any,
	disabled: PropTypes.any,
	required: PropTypes.any,
};

export default function Input({placeholder, type, value, onChange, maxLength, disabled, required}) {
  return (
		<input
			type={type}
			className="w-full border border-gray-500 px-3 text-lg rounded-lg h-12 outline-none mb-4 md:h-14 placeholder:text-base placeholder:md:text-lg focus:outline-orange-500 focus:border-0"
			//TODO Add transistion to the input field
			placeholder={placeholder}
			value={value}
			onChange={onChange}
			maxLength={maxLength}
			disabled={disabled}
			required={required}
		/>
	);
}

