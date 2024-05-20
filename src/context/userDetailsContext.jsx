import { createContext, useReducer } from "react";
import PropTypes from "prop-types";

export const UserDetailsContext = createContext();

const initialState = {
	openPanel: false,
};

function reducer(state, action) {
	switch (action.type) {
		case "getDetails":
			return {
				...state,
				openPanel: true,
			};
		case "closePanel":
		return{
			...state,
			openPanel: false,
		}
		default:
			throw new Error("Action unkonwn");
	}
}

UserDetailsProvider.propTypes = {
	children: PropTypes.any,
};

export default function UserDetailsProvider({ children }) {
	const [state, dispatch] = useReducer(reducer, initialState);
	return <UserDetailsContext.Provider value={{ state, dispatch }}>{children}</UserDetailsContext.Provider>;
}
