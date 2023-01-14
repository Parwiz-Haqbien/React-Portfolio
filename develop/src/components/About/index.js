import React from 'react';

function About() {
	return (
		<section>
			<div className="center" id="about">
				<h1 className="page-header">About Me</h1>
			</div>
			<div className="center">
				<img
					src={require('../../assets/parwiz.png')}
					alt="about-me"
					className="photo"
				/>
			</div>
			<div>
				<p>
                I am close to completing my full-stack developer course and have gained expertise in various 
                languages such as JavaScript, CSS, HTML, and React. My passion lies in problem-solving 
                and staying up-to-date with the latest technologies. I am excited to put my new skills to 
                use and create innovative solutions for users.
				</p>
			</div>
		</section>
	);
}

export default About;