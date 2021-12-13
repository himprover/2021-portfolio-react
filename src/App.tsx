import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/themes';
import Header from 'pages/Header';
import GlobalStyle from './styles/global-styles';
import Content from 'pages/Content';
import rootReducer from './modules';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Loading from 'components/Loading';

const store = createStore(rootReducer);

function App() {
	const [theme, setTheme] = useState('dark');
	const toggleTheme = () => {
		if (theme === 'light') {
			setTheme('dark');
		} else {
			setTheme('light');
		}
	};

	return (
		<Provider store={store}>
			<ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
				<Wrap>
					<Loading />
					<GlobalStyle />
					<Header theme={theme} setTheme={toggleTheme} />
					<Content />
				</Wrap>
			</ThemeProvider>
		</Provider>
	);
}

const Wrap = styled.div``;

export default App;
