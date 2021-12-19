import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import {
	smallPhone,
	defaultPhone,
	smallLaptop,
	defaultLaptop,
	defaultDesktop,
	bigDesktop,
} from 'styles/themes';

const GlobalStyle = createGlobalStyle`
	${normalize}
	html{
		  -ms-user-select: none; 
			-moz-user-select: -moz-none;
			-khtml-user-select: none;
			-webkit-user-select: none;
			user-select: none;
	}
	body {
	margin: 0;
	padding-left: 50px;
	overflow-x:hidden;
	overflow-y:hidden;
	background: ${({ theme }: { theme: any }) => theme.bgColor};
	//color: ${({ theme }: { theme: any }) => theme.fontColor};
	font-family: 'IBMPlexSansKR', sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	-ms-overflow-style: none;
	}
	::-webkit-scrollbar { display: none; }
	* {
	box-sizing: border-box;	// padding&border in width, height
	transition: background-color 0.5s ease-in-out, color 0.5s ease-in-out, text-shadow 0.5s ease-in-out, fill 0.5s ease-in-out;
	}

	/* Extra small devices (phones, 600px and down) */
	@media only screen and (max-width: ${smallPhone}) {
html{
			font-size:34%;
		}
	}
	/* Small devices (portrait tablets and large phones, 600px and up) */
	@media only screen and (min-width: ${smallPhone}) {
html{
			font-size:37.5%;
		}
	}
	/* Medium devices (landscape tablets, 768px and up) */
	@media only screen and (min-width: ${defaultPhone}) {
html{
			font-size:43.8%;
		}
	}
	/* Large devices (laptops/desktops, 992px and up) */
	@media only screen and (min-width: ${smallLaptop}) {
		html{
			font-size:50%;
		}
	}

		/* Extra large devices (large laptops and desktops, 1200px and up) */
	@media only screen and (min-width: ${defaultLaptop}) {
		html{
			font-size:56.3%;
		}
	}
	@media only screen and (min-width: ${defaultDesktop}) {
		html{
			font-size:62.5%;
		}
	}

	@media only screen and (min-width: ${bigDesktop}) {
		html{
			font-size:66%;
		}
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
