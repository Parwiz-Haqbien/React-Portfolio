import React from "react";

function Resume() {
	return (
		<section>
			<div className="center">
				<h1 className="page-header">My Resume</h1>
			</div>
			<div>
				<h5>Front-End</h5>
				<ol>
					<li>HTML5</li>
					<li>CSS3</li>
					<li>JavaScript</li>
					<li>jQuery</li>
					<li>Bootstrap</li>
					<li>React</li>
				</ol>
				<br></br>
				<h5>Back-End</h5>
				<ol>
					<li>APIs</li>
					<li>NodeJS</li>
					<li>Express</li>
					<li>Model View Controller (MVC)</li>
					<li>REST</li>
					<li>Progressive Web Applications (PWA)</li>
				</ol>
				<br></br>
				<h5>Dev Tool</h5>
				<ol>
					<li>Git</li>
					<li>Jest</li>
					<li>npm</li>
					<li>Webpack</li>
				</ol>
				<br></br>
				<h5>Database</h5>
				<ol>
					<li>MySQL</li>
					<li>NoSQL</li>
					<li>Sequelize</li>
					<li>SQLite</li>
					<li>Mongoose</li>
					<li>MongoDB</li>
					<li>GraphQL</li>
				</ol>
			</div>
		</section>
	);
}

export default Resume;