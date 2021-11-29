import styled from 'styled-components';

const Menu = styled.div`
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: auto;
	width: 5rem;
	height: 100vh;
`;

function Header() {
	return <Menu></Menu>;
}

export default Header;
