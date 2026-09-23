const API_BASE = "https://playground.4geeks.com/contact";

const AGENDA_SLUG = "mieresantonio";

export const fetchContacts = async (dispatch) => {
	dispatch({ type: "set_loading", payload: true });
	try {
		let resp = await fetch(`${API_BASE}/agendas/${AGENDA_SLUG}`);

		if (resp.status === 404) {
			// La agenda no existe aún, la creamos vacía
			await fetch(`${API_BASE}/agendas/${AGENDA_SLUG}`, { method: "POST" });
			resp = await fetch(`${API_BASE}/agendas/${AGENDA_SLUG}`);
		}

		const data = await resp.json();
		dispatch({ type: "set_contacts", payload: data.contacts || [] });
	} catch (error) {
		console.error(error);
		dispatch({ type: "set_error", payload: "No se pudo conectar con el servidor." });
	}
};

export const createContact = async (dispatch, contactData) => {
	await fetch(`${API_BASE}/agendas/${AGENDA_SLUG}/contacts`, {
		method: "POST",
		body: JSON.stringify(contactData),
		headers: { "Content-Type": "application/json" },
	});
	await fetchContacts(dispatch);
};

export const updateContact = async (dispatch, id, contactData) => {
	await fetch(`${API_BASE}/agendas/${AGENDA_SLUG}/contacts/${id}`, {
		method: "PUT",
		body: JSON.stringify(contactData),
		headers: { "Content-Type": "application/json" },
	});
	await fetchContacts(dispatch);
};

export const deleteContact = async (dispatch, id) => {
	await fetch(`${API_BASE}/agendas/${AGENDA_SLUG}/contacts/${id}`, {
		method: "DELETE",
	});
	await fetchContacts(dispatch);
};