import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { fetchContacts, deleteContact } from "../store/contactActions.js";
import ContactCard from "../components/ContactCard.jsx";
import ConfirmModal from "../components/ConfirmModal.jsx";

export const Contact = () => {
	const { store, dispatch } = useGlobalReducer();
	const [contactToDelete, setContactToDelete] = useState(null);

	useEffect(() => {
		fetchContacts(dispatch);
	}, []);

	const handleConfirmDelete = async () => {
		await deleteContact(dispatch, contactToDelete.id);
		setContactToDelete(null);
	};

	return (
		<div className="container mt-4" style={{ maxWidth: "700px" }}>
			<div className="d-flex justify-content-between align-items-center mb-4">
				<h2>Mis contactos</h2>
				<Link to="/add" className="btn btn-success">
					Agregar nuevo contacto
				</Link>
			</div>

			{store.isLoading && <p className="text-muted">Cargando contactos...</p>}
			{store.errorMsg && <p className="text-danger">{store.errorMsg}</p>}

			{!store.isLoading && store.contacts.length === 0 && (
				<p className="text-muted text-center">Aún no tienes contactos, agrega el primero.</p>
			)}

			{store.contacts.map((contact) => (
				<ContactCard key={contact.id} contact={contact} onDeleteClick={setContactToDelete} />
			))}

			<ConfirmModal
				show={contactToDelete !== null}
				contactName={contactToDelete?.name}
				onConfirm={handleConfirmDelete}
				onCancel={() => setContactToDelete(null)}
			/>
		</div>
	);
};