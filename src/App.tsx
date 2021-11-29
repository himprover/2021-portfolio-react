import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/themes';
import Header from 'pages/Header';
import Main from 'pages/Main';
import Skills from 'pages/Skills';
import Reference from 'pages/Reference';
import Hobby from 'pages/Hobby';
import Contact from 'pages/Contact';
import GlobalStyle from './styles/global-styles';

const Wrap = styled.div`
	width: 100vw;
`;

function App() {
	const [theme, setTheme] = useState('light');
	const toggleTheme = () => {
		if (theme === 'light') {
			setTheme('dark');
		} else {
			setTheme('light');
		}
	};
	return (
		<ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
			<Wrap>
				<GlobalStyle />
				<Header theme={theme} setTheme={toggleTheme} />
				<Main />
				<Skills />
				<Reference />
				<Hobby />
				<Contact />
			</Wrap>
		</ThemeProvider>
	);
}

export default App;
