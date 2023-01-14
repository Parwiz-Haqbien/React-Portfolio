import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

function ContactInfo() {
	const [formFilling, setFormFilling] = useState({
		name: "",
		email: "",
		message: "",
	});

	const [errorMessage, setErrorMessage] = useState("");

	const { name, email, message } = formFilling;

	function handleEmail(e) {
		if (e.target.name === "email") {
			const isValid = validateEmail(e.target.value);
			if (!isValid) {
				setErrorMessage("Email is invalid.");
			} else {
				if (!e.target.value.length) {
					setErrorMessage(`${e.target.name} is required.`);
				} else {
					setErrorMessage("");
				}
			}
		}

		if (!errorMessage) {
			setFormFilling({ ...formFilling, [e.target.name]: e.target.value });
		}
	}

	function leftBlank(e) {
		if (e.target.name === "Name" || e.target.name === "Message") {
			if (!e.target.value.length) {
				setErrorMessage(`${e.target.name} is required.`);
			} else {
				setErrorMessage("");
			}
		}

		if (!errorMessage) {
			setFormFilling({ ...formFilling, [e.target.name]: e.target.value });
		}
	}

	return (
		<section>
			<div className="center">
				<h2 className="page-header">Contacts</h2>
			</div>
			<div>
				<form id="contact-form">
					<div>
						<label htmlFor="Name">Name:</label>
						<br></br>
						<input
							type="text"
							defaultValue={name}
							onBlur={leftBlank}
							name="Name"
						/>
					</div>
					<div>
						<label htmlFor="email">Email address:</label>
						<br></br>
						<input
							type="email"
							defaultValue={email}
							name="email"
							onBlur={handleEmail}
						/>
					</div>
					<div>
						<label htmlFor="Message">Message:</label>
						<br></br>
						<textarea
							name="Message"
							defaultValue={message}
							onBlur={leftBlank}
							rows="5"
						/>
					</div>
					{errorMessage && (
						<div>
							<p className="error-text">{errorMessage}</p>
						</div>
					)}
					<button type="submit">Submit</button>
				</form>
			</div>
		</section>
	);
}

export default ContactInfo;