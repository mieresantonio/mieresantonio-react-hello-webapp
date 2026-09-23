import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { createContact, updateContact } from "../store/contactActions.js";

const emptyForm = { name: "", email: "", phone: "", address: "" };

export const AddContact = () => {
	const { id } = useParams(); // si viene un id en la URL, estamos editando
	const navigate = useNavigate();
	const { store, dispatch } = useGlobalReducer();

	const [formData, setFormData] = useState(emptyForm);
	const isEditing = Boolean(id);

	useEffect(() => {
		if (isEditing) {
			const current = store.contacts.find((c) => c.id === Number(id));
			if (current) {
				setFormData({
					name: current.name || "",
					email: current.email || "",
					phone: current.phone || "",
					address: current.address || "",
				});
			}
		}
	}, [id, store.contacts, isEditing]);

	const handleChange = (event) => {
		setFormData({ ...formData, [event.target.name]: event.target.value });
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		if (isEditing) {
			await updateContact(dispatch, Number(id), formData);
		} else {
			await createContact(dispatch, formData);
		}

		navigate("/");
	};

	return (
		<div className="container mt-4" style={{ maxWidth: "500px" }}>
			<h2 className="text-center mb-4">{isEditing ? "Editar contacto" : "Agregar nuevo contacto"}</h2>

			<form onSubmit={handleSubmit}>
				<div className="mb-3">
					<label className="form-label">Nombre completo</label>
					<input
						type="text"
						name="name"
						className="form-control"
						placeholder="Nombre completo"
						value={formData.name}
						onChange={handleChange}
						required
					/>
				</div>

				<div className="mb-3">
					<label className="form-label">Correo electrónico</label>
					<input
						type="email"
						name="email"
						className="form-control"
						placeholder="Ingresa el correo"
						value={formData.email}
						onChange={handleChange}
						required
					/>
				</div>

				<div className="mb-3">
					<label className="form-label">Teléfono</label>
					<input
						type="text"
						name="phone"
						className="form-control"
						placeholder="Ingresa el teléfono"
						value={formData.phone}
						onChange={handleChange}
					/>
				</div>

				<div className="mb-3">
					<label className="form-label">Dirección</label>
					<input
						type="text"
						name="address"
						className="form-control"
						placeholder="Ingresa la dirección"
						value={formData.address}
						onChange={handleChange}
					/>
				</div>

				<button type="submit" className="btn btn-primary w-100">
					Guardar
				</button>
			</form>

			<Link to="/" className="d-block text-center mt-2">
				Volver a mis contactos
			</Link>
		</div>
	);
};