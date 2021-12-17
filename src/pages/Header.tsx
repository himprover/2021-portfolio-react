import styled, { keyframes } from 'styled-components';

import { ReactComponent as lightdarkbtnsvg } from 'imgs/header/svg/lightdarkbtn.svg';

interface themeToggle {
	theme: string;
	setTheme: () => void;
}

function Header({ theme, setTheme }: themeToggle) {
	return (
		<Menu>
			<ToggleBtn className={theme} onClick={setTheme} />
			<MenuBtn>Main</MenuBtn>
			<MenuBtn>Skills</MenuBtn>
			<MenuBtn>Refernece</MenuBtn>
			<MenuBtn>AboutMe</MenuBtn>
			<MenuBtn>Contact</MenuBtn>
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
	padding-bottom: 15%;
`;

const blink = keyframes`
	0%{	
			fill:#000000;
	}
	10%{
			fill:#000000;}
	20%{		
			fill:#817800;}
	30%{		
			fill:#000000;}
	40%{		
			fill:#817800;}
	50%{		
			fill:#000000;filter: none;}
	70%{		
			fill:#817800;filter: drop-shadow(0px 0px 5px #ffee00);}
	100%{		
			fill:#817800;filter: drop-shadow(0px 0px 5px #ffee00);
			}
`;

const blink2 = keyframes`
	0%{	
			fill:#ffee00;
	}
	10%{
			fill:#ffee00;}
	20%{		
			fill:#c2b500;}
	30%{		
			fill:#ffee00;}
	40%{		
			fill:#c2b500;}
	50%{		
			fill:#ffee00;filter: none;}
	70%{		
			fill:#c2b500;filter: drop-shadow(0px 0px 5px #686100);}
	100%{		
			fill:#c2b500;filter: drop-shadow(0px 0px 5px #4b4600);
			}
`;

const ToggleBtn = styled(lightdarkbtnsvg)`
	width: 4rem;
	cursor: pointer;
	path {
		transition: all 0.5s ease-in-out;
	}
	.lbbtn-44 {
		transform: translateY(-0.5px);
	}

	&.dark {
		.lbbtn-3 {
			// DAY
			opacity: 0;
		}
		.lbbtn-22 {
			// NIGHT
			opacity: 1;
			filter: drop-shadow(0px 0px 5px #000000);
		}
		&:hover {
			// blink sun in dark mode
			.lbbtn-44 {
				animation: ${blink} 1s forwards;
			}
		}
	}
	&.light {
		.lbbtn-3 {
			// DAY
			opacity: 1;
			filter: drop-shadow(0px 0px 5px #ffee00);
		}
		.lbbtn-22 {
			// NIGHT
			opacity: 0;
		}
		.lbbtn-1 {
			// BG BG
			fill: #ffffff;
		}
		.lbbtn-2 {
			// BG
			fill: #009cff;
		}
		.lbbtn-44 {
			// SUN
			fill: #ffee00;
			filter: drop-shadow(0px 5px 10px #ffee00);
		}
		&:hover {
			// blink sun in dark mode
			.lbbtn-44 {
				animation: ${blink2} 1s forwards;
			}
		}
	}
`;

const MenuBtn = styled.div``;

export default Header;
