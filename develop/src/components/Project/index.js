import React from 'react';
import Project from '../Project';

function Portfolio() {
	const projects = [
		{
			name: 'WordUp',
			description:
				'WordUp translation application to provide regional language translations for a given word or phrase',
			image: 'wordup.png',
			technologies: [
				'HTML/CSS',
				'JavaScript',],
			github: 'https://github.com/Parwiz-Haqbien/Dictionary',
		},
		{
			name: 'Password-Generator',
			description:
				'Password generator that generates a password based on the users chosen criteria.',
			image: 'password-gen.png',
			technologies: [
				'HTML/CSS',
				'JavaScript',			],
			github: 'https://github.com/Parwiz-Haqbien/Password-Generator',
			deployed: 'https://parwiz-haqbien.github.io/Password-Generator/',
		},
		{
			name: 'Junior-Jobs',
			description:
				'A key role in your journey to becoming a full-stack web developer, where you can apply to entry level jobs',
			image: 'Junior-jobs.png',
			technologies: ['HTML/CSS', 'JavaScript', 'handlebars', 'mysql2'],
			github: 'https://github.com/Parwiz-Haqbien/Junior-Jobs',
		},
		{
			name: 'Note-taker',
			description:
				'A note-taking application that uses Express.js and a JSON file to store and retrieve notes. You can create, view notes with it.',
			image: 'note-taker.png',
			technologies: [
				'JavaScript',
                'HTML/CSS',
				'Express',
			],
			github: 'https://github.com/Parwiz-Haqbien/note-taker',
			deployed: 'https://note-taker1.herokuapp.com/',
		},
		{
			name: 'Tech-Blog',
			description:
				'Allows multiple users to create an account and publish blog posts. Users can also edit and delete their own posts, as well as comment on posts from other users.',
			image: 'tech-blog.png',
			technologies: ['HTML/CSS', 'JavaScript', 'express', 'express', 'handlebars'],
			github: 'https://github.com/Parwiz-Haqbien/Tech-Blog',
			deployed: 'https://herkuo-techblog.herokuapp.com/',
		},
		{
			name: 'Work-Day-Scheduler',
			description:
				'A calendar application that allows users to enter events into time blocks.',
			image: 'workDay.png',
			technologies: ['HTML/CSS', 'JavaScript'],
			github: 'https://github.com/Parwiz-Haqbien/Work-Day-Scheduler',
			deployed: 'https://parwiz-haqbien.github.io/Work-Day-Scheduler/',
		},
		{
			name: 'PWA-Text-Editor',
			description:
				' text editor app utilizes webpack and service workers to provide a seamless experience. Install it on your device and start taking notes on the go!.',
			image: 'Pwa-text-editor.png',
			technologies: ['HTML/CSS', 'JavaScript', 'webpack'],
			github: 'https://github.com/Parwiz-Haqbien/PWA-Text-Editor',
			deployed: 'https://pwa-text-editor12.herokuapp.com//',
		},
	];

}
export default Portfolio;