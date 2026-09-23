import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ContactCard = ({ contact, onDeleteClick }) => {
	return (
		<div className="d-flex align-items-center justify-content-between border-bottom py-3">
			<div className="d-flex align-items-center gap-3">
				<img
					src={contact.avatar || "https://placehold.co/80"}
					alt={contact.name}
					className="rounded-circle"
					style={{ width: "70px", height: "70px", objectFit: "cover" }}
				/>
				<div>
					<h5 className="mb-1">{contact.name}</h5>
					<p className="mb-0 text-muted small">📍 {contact.address}</p>
					<p className="mb-0 text-muted small">📞 {contact.phone}</p>
					<p className="mb-0 text-muted small">✉️ {contact.email}</p>
				</div>
			</div>

			<div className="d-flex align-items-center gap-3">
				<Link to={`/edit/${contact.id}`} className="text-secondary d-flex align-items-center">
					<i className="fa-solid fa-pen"></i>
				</Link>
				<i
					className="fa-solid fa-trash text-dark"
					role="button"
					onClick={() => onDeleteClick(contact)}
				></i>
			</div>
		</div>
	);
};

ContactCard.propTypes = {
	contact: PropTypes.shape({
		id: PropTypes.number.isRequired,
		name: PropTypes.string,
		email: PropTypes.string,
		phone: PropTypes.string,
		address: PropTypes.string,
		avatar: PropTypes.string,
	}).isRequired,
	onDeleteClick: PropTypes.func.isRequired,
};

export default ContactCard;