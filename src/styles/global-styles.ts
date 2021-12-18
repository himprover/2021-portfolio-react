import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
	${normalize}

	body {
	margin: 0;
	padding-left: 5rem;
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
	@media only screen and (max-width: 600px) {

	}
	/* Small devices (portrait tablets and large phones, 600px and up) */
	@media only screen and (min-width: 600px) {

	}
	/* Medium devices (landscape tablets, 768px and up) */
	@media only screen and (min-width: 768px) {

	}
	/* Large devices (laptops/desktops, 992px and up) */
	@media only screen and (min-width: 992px) {

	}
		/* Extra large devices (large laptops and desktops, 1200px and up) */
	@media only screen and (min-width: 1000px) {
		html{
			font-size:34%;
		}
		
		/* Extra large devices (large laptops and desktops, 1200px and up) */
	@media only screen and (min-width: 1100px) {
		html{
			font-size:37%;
		}
		

		/* Extra large devices (large laptops and desktops, 1200px and up) */
	@media only screen and (min-width: 1200px) {
		html{
			font-size:40%;
		}
		
		/* Extra large devices (large laptops and desktops, 1200px and up) */
	@media only screen and (min-width: 1300px) {
		html{
			font-size:46%;
		}
		
	/* Extra large devices (large laptops and desktops, 1200px and up) */
	@media only screen and (min-width: 1400px) {
		html{
			font-size:49%;
		}
		 
	}

	@media only screen and (min-width: 1500px) {
		html{
			font-size:52%;
		}
	}
	/* Extra large devices (large laptops and desktops, 1200px and up) */
	@media only screen and (min-width: 1600px) {
		html{
			font-size:54%;
		}
	}
	/* Extra large devices (large laptops and desktops, 1200px and up) */
	@media only screen and (min-width: 1700px) {
		html{
			font-size:58%;
		}
	}
	@media only screen and (min-width: 1800px) {
		html{
			font-size:62.5%;
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
