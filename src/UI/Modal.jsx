import ReactDOM from "react-dom";

function Modal({ children}) {
	return ReactDOM.createPortal(
		<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
			<div className="bg-white rounded-lg p-6 w-full max-w-md">
				<h1 className="text-4xl font-semibold mb-4">AboutUs</h1>
				<p className="text-base leading-[30px]">{children}</p>
				<div className="mt-4 flex justify-end">
					<button>Cancel</button>
				</div>
			</div>
		</div>,
		document.querySelector(".modal-container")
	);
}

export default Modal;
