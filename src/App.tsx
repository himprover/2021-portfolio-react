import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import styled from 'styled-components';
import Header from 'pages/Header';
import Main from 'pages/Main';
import Skills from 'pages/Skills';
import Reference from 'pages/Reference';
import Hobby from 'pages/Hobby';
import Contact from 'pages/Contact';

const Wrap = styled.div`
	width: 100vw;
`;

function App() {
	return (
		<Wrap>
			<Header />
			<Main />
			<Skills />
			<Reference />
			<Hobby />
			<Contact />
		</Wrap>
	);
}

export default App;
