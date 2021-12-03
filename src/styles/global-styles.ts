import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
	${normalize}
	html{
		font-size:10px;
	}
	/* @media screen and (max-width:1680px) {
		html{font-size:8px;}
	} */
	body {
	margin: 0;
	padding-left: 5rem;
	overflow-x:hidden;
	overflow-y:hidden;
	background: ${({ theme }: { theme: any }) => theme.bgColor};
	color: ${({ theme }: { theme: any }) => theme.fontColor};
	font-family: 'IBMPlexSansKR', sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	-ms-overflow-style: none;
	}
	::-webkit-scrollbar { display: none; }
	* {
	box-sizing: border-box;
	transition: all 0.25s ease-in-out;
	}
	code {
		font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
			monospace;
	}

	@font-face {
		font-family: 'IBMPlexSansKR';
		src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-07@1.0/IBMPlexSansKR-ExtraLight.woff')
			format('woff');
		font-weight: 100;
		font-style: normal;
	}
	@font-face {
		font-family: 'IBMPlexSansKR';
		src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-07@1.0/IBMPlexSansKR-Light.woff')
			format('woff');
		font-weight: 200;
		font-style: normal;
	}
	@font-face {
		font-family: 'IBMPlexSansKR';
		src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-07@1.0/IBMPlexSansKR-Regular.woff')
			format('woff');
		font-weight: 300;
		font-style: normal;
	}
	@font-face {
		font-family: 'IBMPlexSansKR';
		src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-07@1.0/IBMPlexSansKR-Text.woff')
			format('woff');
		font-weight: 400;
		font-style: normal;
	}
	@font-face {
		font-family: 'IBMPlexSansKR';
		src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-07@1.0/IBMPlexSansKR-Medium.woff')
			format('woff');
		font-weight: 500;
		font-style: normal;
	}

	@font-face {
		font-family: 'IBMPlexSansKR';
		src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-07@1.0/IBMPlexSansKR-SemiBold.woff')
			format('woff');
		font-weight: 600;
		font-style: normal;
	}

	@font-face {
		font-family: 'IBMPlexSansKR';
		src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-07@1.0/IBMPlexSansKR-Bold.woff')
			format('woff');
		font-weight: 700;
		font-style: normal;
	}
	`;

export default GlobalStyle;
