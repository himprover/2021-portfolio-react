import styled, { css, keyframes } from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'modules';
import { changeBy } from 'modules/sectionHandle';
import { useState, useEffect } from 'react';

import SvgBtn from 'components/SvgBtn';

import { ReactComponent as lightdarkbtnsvg } from 'imgs/header/svg/lightdarkbtn.svg';

interface themeToggle {
	theme: string;
	setTheme: () => void;
}

function Header({ theme, setTheme }: themeToggle) {
	const [hover, setHover] = useState(false);
	const nowsection = useSelector(
		(state: RootState) => state.sectionHandle.nowsection
	); // nowsection load
	const dispatch = useDispatch(); // use dispatch

	const onChange = (payload: { sum: number; direction: string }) => {
		dispatch(changeBy(payload));
	};

	const sectionHandle = (sectionNum: number) => {
		// section moving handler
		let tmp = sectionNum - nowsection; // dest section - now section
		let direction = '';
		if (tmp > 0) {
			direction = 'down';
		} else if (tmp < 0) {
			direction = 'up';
		} else if (tmp === 0) {
			return;
		}
		let payload = {
			sum: tmp,
			direction: direction,
		};
		return onChange(payload);
	};

	useEffect(() => {
		setHover(false);
		setTimeout(() => setHover(true), 500);
	}, [theme]);

	return (
		<Menu>
			<ToggleBtn className={theme} onClick={setTheme} canhover={hover} />
			<MenuBtn name='Main' onClick={() => sectionHandle(0)}>
				<SvgBtn name='Main' />
			</MenuBtn>
			<MenuBtn name='Skills' onClick={() => sectionHandle(1)}>
				<SvgBtn name='Skills' />
			</MenuBtn>
			<MenuBtn name='Reference' onClick={() => sectionHandle(2)}>
				<SvgBtn name='Reference' />
			</MenuBtn>
			<MenuBtn name='AboutMe' onClick={() => sectionHandle(3)}>
				<SvgBtn name='AboutMe' />
			</MenuBtn>
			<MenuBtn name='Contact' onClick={() => sectionHandle(4)}>
				<SvgBtn name='Contact' />
			</MenuBtn>
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
	width: 50px;
	height: 100vh;
	background: ${({ theme }: { theme: any }) => theme.headerBgColor};
	z-index: 11;
	padding-top: 15vh;
	padding-bottom: 15vh;
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
			fill:#ffee00;}
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

const ToggleBtn = styled(lightdarkbtnsvg)<{ canhover: boolean }>`
	width: 40px;
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
		${(props) =>
			props.canhover
				? css`
						&:hover {
							// blink sun in dark mode
							.lbbtn-44 {
								animation: ${blink} 1s forwards;
							}
						}
				  `
				: null}
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

		${(props) =>
			props.canhover
				? css`
						&:hover {
							// blink sun in dark mode
							.lbbtn-44 {
								animation: ${blink2} 1s forwards;
							}
						}
				  `
				: null}
	}
`;

const MenuBtn = styled.div<{ name: string }>`
	cursor: pointer;
	position: relative;
	path {
		fill: #fff;
	}

	&::after {
		font-size: 1.2rem;
		color: #fff;
		content: '${(props) => props.name}';
		position: absolute;
		top: 50%;
		left: 4rem;
		transform: translateY(-50%);
		background: #000000a7;
		padding: 0.5rem;
		opacity: 0;
		transition: opacity 0.3s;
	}

	&:hover {
		&::after {
			opacity: 1;
		}
	}
`;

export default Header;
