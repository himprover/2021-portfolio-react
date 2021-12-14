import styled, { css, keyframes } from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from 'modules';
import { useState } from 'react';

import { ReactComponent as LightSVG } from 'imgs/reference/svg/light.svg';
import { ReactComponent as ArrowSVG } from 'imgs/reference/svg/arrow.svg';
import One from 'components/References/One';
import Two from 'components/References/Two';
import Three from 'components/References/Three';
import Four from 'components/References/Four';
import Five from 'components/References/Five';
import Six from 'components/References/Six';
function Reference() {
	const nowsection = useSelector(
		(state: RootState) => state.sectionHandle.nowsection
	);
	const [slide, setSlide] = useState<number>(0);
	const [isoff, setOff] = useState<boolean>(false);

	const slideHandle = (direction: string) => {
		if (direction === 'right') {
			slide === 5
				? setSlide((slide) => slide - 5)
				: setSlide((slide) => slide + 1);
		} else {
			slide === 0
				? setSlide((slide) => slide + 5)
				: setSlide((slide) => slide - 1);
		}
		setTimeout(() => {
			setOff((isoff) => !isoff);
		}, 1);
		setOff((isoff) => !isoff);
	};

	return (
		<ReferenceDIV nowsection={nowsection}>
			<Title nowsection={nowsection}>Reference</Title>
			<ArrowDIV nowsection={nowsection}>
				<Arrow direction='left' onClick={() => slideHandle('left')} />
			</ArrowDIV>
			<ListDIV nowsection={nowsection} className={isoff ? 'Off' : ''}>
				<One isShow={slide === 0 ? true : false} />
				<Two isShow={slide === 1 ? true : false} />
				<Three isShow={slide === 2 ? true : false} />
				<Four isShow={slide === 3 ? true : false} />
				<Five isShow={slide === 4 ? true : false} />
				<Six isShow={slide === 5 ? true : false} />
			</ListDIV>
			<ArrowDIV nowsection={nowsection}>
				<Arrow direction='right' onClick={() => slideHandle('right')} />
			</ArrowDIV>
			<Light nowsection={nowsection} className={isoff ? 'Off' : ''} />
			<Light nowsection={nowsection} className={isoff ? 'Sub Off' : 'Sub'} />
		</ReferenceDIV>
	);
}

const blink = keyframes`
	0%{opacity:0;}
	10%{opacity:0;}
	11%{opacity:0.7;}
	12%{opacity:0;}
	13%{opacity:0.8;}
	14%{opacity:0;}
	15%{opacity:0.3;}
	16%{opacity:1;}
	17%{opacity:0;}
	40%{opacity:0;}
	100%{opacity:1;}
`;

const bright = keyframes`
	from{filter: drop-shadow(0px 10px 50px white);
	opacity:0;}
	to{filter: drop-shadow(0px 15px 55px white);
	opacity:1;}
`;

const opacityShow = keyframes`
	from {
		opacity:0;
	} to {opacity:1;}
`;

const ReferenceDIV = styled.div<{ nowsection: number }>`
	background: black;
	display: flex;
	justify-content: space-around;
	overflow: hidden;
	position: fixed;
	align-items: center;
	top: 0;
	z-index: 10;
	width: 1870px;
	height: 100vh;
	transition: all 0.5s;
	${(props) =>
		props.nowsection === 2
			? css`
					opacity: 1;
					visibility: visible;
			  `
			: css`
					opacity: 0;
					visibility: hidden;
			  `};
`;

const Title = styled.h1<{ nowsection: number }>`
	font-size: 6rem;
	font-weight: 400;
	position: absolute;
	margin: 0;
	left: 3rem;
	top: 3rem;
	opacity: 0;
	${(props) =>
		props.nowsection === 2
			? css`
					animation: ${blink} 0.5s 0.5s forwards;
			  `
			: css`
					opacity: 1;
			  `}
`;

const ListDIV = styled.div<{ nowsection: number }>`
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	position: relative;
	width: 140rem;
	height: 70vh;
	opacity: 0;
	${(props) =>
		props.nowsection === 2
			? css`
					animation: ${blink} 0.5s 0.5s forwards;
			  `
			: css`
					opacity: 1;
			  `}

	&.Off {
		display: none;
	}
`;

const Light = styled(LightSVG)<{ nowsection: number }>`
	position: absolute;
	opacity: 0;
	bottom: 0;
	left: 50%;
	width: 40rem;
	transform: rotate(180deg) translateX(50%);
	filter: drop-shadow(0px 10px 40px white);
	&.Sub {
		${(props) =>
			props.nowsection === 2
				? css`
						animation: ${bright} 1.5s 1s infinite alternate ease-in-out;
				  `
				: null}
	}
	&.Off {
		display: none;
	}

	${(props) =>
		props.nowsection === 2
			? css`
					animation: ${blink} 0.5s 0.5s forwards;
			  `
			: css`
					opacity: 1;
			  `}
`;

const ArrowDIV = styled.div<{ nowsection: number }>`
	position: relative;
	display: flex;
	justify-content: center;
	width: 10vw;
	opacity: 0;
	z-index: 5;
	${(props) =>
		props.nowsection === 2
			? css`
					animation: ${opacityShow} 0.5s 1.2s forwards;
			  `
			: css`
					opacity: 1;
			  `}
`;

const Arrow = styled(ArrowSVG)`
	width: 3rem;
	display: block;
	cursor: pointer;
	${(props) =>
		props.direction === 'left'
			? css`
					transform: rotate(180deg);
			  `
			: ''};
`;

export default Reference;
