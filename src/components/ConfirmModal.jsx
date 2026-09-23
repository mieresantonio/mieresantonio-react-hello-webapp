import PropTypes from "prop-types";

const ConfirmModal = ({ show, contactName, onConfirm, onCancel }) => {
	if (!show) return null;

	return (
		<div
			className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
			style={{ background: "rgba(0,0,0,0.5)", zIndex: 1050 }}
		>
			<div className="bg-white rounded p-4" style={{ maxWidth: "400px" }}>
				<h5>¿Eliminar contacto?</h5>
				<p className="text-muted">
					Estás a punto de eliminar a <strong>{contactName}</strong>. Esta acción no se puede
					deshacer.
				</p>
				<div className="d-flex justify-content-end gap-2 mt-3">
					<button className="btn btn-outline-secondary" onClick={onCancel}>
						Cancelar
					</button>
					<button className="btn btn-danger" onClick={onConfirm}>
						Sí, eliminar
					</button>
				</div>
			</div>
		</div>
	);
};

ConfirmModal.propTypes = {
	show: PropTypes.bool.isRequired,
	contactName: PropTypes.string,
	onConfirm: PropTypes.func.isRequired,
	onCancel: PropTypes.func.isRequired,
};

export default ConfirmModal;