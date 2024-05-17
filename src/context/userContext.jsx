import { createContext, useReducer } from "react";
import PropTypes from "prop-types";

export const UserContext = createContext();

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

UserProvider.propTypes = {
	children: PropTypes.any,
};

export default function UserProvider({ children }) {
	const [state, dispatch] = useReducer(reducer, initialState);
	return <UserContext.Provider value={{ state, dispatch }}>{children}</UserContext.Provider>;
}
