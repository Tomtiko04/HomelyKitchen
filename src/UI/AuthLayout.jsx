import PropTypes from "prop-types"

export default function AuthLayout({children}) {
  return (
		<section className="authBg w-full h-[100dvh] flex items-center justify-center">
			<div className="bg-white rounded w-96 py-6 px-4">
				<div className="flex justify-center items-center">
					<img src="/logo.svg" className="block" />
				</div>
				{children}
			</div>
		</section>
	);
}

AuthLayout.propTypes = {
    children: PropTypes.any,
}
