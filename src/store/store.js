export const initialStore = () => {
	return {
		contacts: [],
		isLoading: true,
		errorMsg: "",
	};
};

export default function storeReducer(store, action = {}) {
	switch (action.type) {
		case "set_contacts":
			return { ...store, contacts: action.payload, isLoading: false, errorMsg: "" };

		case "set_loading":
			return { ...store, isLoading: action.payload };

		case "set_error":
			return { ...store, errorMsg: action.payload, isLoading: false };

		default:
			throw Error("Unknown action.");
	}
}