import React, { useState } from "react";

function Form() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Form submitted:", formData);
		// Logique de soumission du formulaire ici
	};

	return (
		<form onSubmit={handleSubmit}>
			<label>
				Name:
				<input
					type="text"
					name="name"
					value={formData.name}
					onChange={handleChange}
				/>
			</label>
			<label>
				Email:
				<input
					type="email"
					name="email"
					value={formData.email}
					onChange={handleChange}
				/>
			</label>
			<label>
				Message:
				<textarea
					name="message"
					value={formData.message}
					onChange={handleChange}
				/>
			</label>
			<button type="submit">Submit</button>
		</form>
	);
}

export default Form;
