import React from "react";

function Footer() {
	return (
		<footer className="footer">
			<div>
				<a
					href="https://github.com/Parwiz-Haqbien"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={require("../../assets/Github.png")}
						alt="Github"
						className="logo"
					></img>
				</a>
			</div>
			<div>
				<a
					href="https://www.linkedin.com/in/parwiz-haqbien-332ba8250/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={require("../../assets/Linkedin.png")}
						alt="LinkedIn"
						className="logo"
					></img>
				</a>
			</div>
			<div>
				<a
					href="https://twitter.com/parwiz_haqbien"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={require("../../assets/twitter.jpg")}
						alt="Twitter"
						className="logo"
					></img>
				</a>
			</div>
		</footer>
	);
}

export default Footer;