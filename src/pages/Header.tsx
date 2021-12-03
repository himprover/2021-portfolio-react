import styled from 'styled-components';
import React, { useState } from 'react';

interface themeToggle {
	theme: string;
	setTheme: () => void;
}

function Header({ theme, setTheme }: themeToggle) {
	return (
		<Menu>
			<button onClick={setTheme}>test(dark)</button>
		</Menu>
	);
}

const Menu = styled.div`
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	position: fixed;
	flex-direction: column;
	justify-content: space-between;
	top: 0;
	bottom: 0;
	left: 0;
	right: auto;
	width: 5rem;
	height: 100vh;
	background: ${({ theme }: { theme: any }) => theme.headerBgColor};
	z-index: 5;
`;

export default Header;
