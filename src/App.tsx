import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import Main from 'pages/Main';
import Skills from 'pages/Skills';
import Reference from 'pages/Reference';
import Hobby from 'pages/Hobby';
import Contact from 'pages/Contact';

function App() {
	return (
		<div>
			<Main />
			<Skills />
			<Reference />
			<Hobby />
			<Contact />
		</div>
	);
}

export default App;
