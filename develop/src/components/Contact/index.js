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
				setErrorMessage("Your email is invalid.");
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

}

export default ContactInfo;