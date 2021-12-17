import styled from 'styled-components';

import { ReactComponent as lightdarkbtnsvg } from 'imgs/header/svg/lightdarkbtn.svg';

interface themeToggle {
	theme: string;
	setTheme: () => void;
}

function Header({ theme, setTheme }: themeToggle) {
	return (
		<Menu>
			<ToggleBtn className={theme} onClick={setTheme} />
		</Menu>
	);
}

const Menu = styled.div`
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	position: absolute;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	top: 0;
	bottom: 0;
	left: 0;
	right: auto;
	width: 5rem;
	height: 100vh;
	background: ${({ theme }: { theme: any }) => theme.headerBgColor};
	z-index: 5;
	padding-top: 1rem;
	padding-bottom: 1rem;
`;

const ToggleBtn = styled(lightdarkbtnsvg)`
	width: 4rem;
	cursor: pointer;
	path {
		transition: all 0.5s ease-in-out;
	}
	&.dark {
		.lbbtn-3 {
			// DAY
			opacity: 0;
		}
		.lbbtn-22 {
			// NIGHT
			opacity: 1;
		}
	}
	&.light {
		.lbbtn-3 {
			// DAY
			opacity: 1;
		}
		.lbbtn-22 {
			// NIGHt
			opacity: 0;
		}
	}
`;

export default Header;
