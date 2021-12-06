import styled, { keyframes } from 'styled-components';
import { forwardRef } from 'react';

import Hwang from 'imgs/main/Hwang.png';
import { ReactComponent as Polygon1 } from 'imgs/main/polygon1.svg';
import { ReactComponent as Polygon2 } from 'imgs/main/polygon2.svg';

import RedGreenLine from 'components/RedGreenLine';

const Main = forwardRef<any>((props, ref) => {
	return (
		<MainDIV ref={ref}>
			<RedGreenLine />
			<Hello>Hello</Hello>
			<ImHwang>I'm Hwang</ImHwang>
			<FE>
				<span>FRONT</span>
				<br />
				<span>Developer</span>
			</FE>
			<Polygon1Styled />
			<Polygon2Styled />
			<HwangStyled src={Hwang} />
		</MainDIV>
	);
});

const fadeInFE1 = keyframes`
	0% {
		transform:translate(100rem, -100rem) rotate(-45deg);
	} 100% {
		transform:translate(0, 0) rotate(-45deg);
	}
`;
const fadeInFE2 = keyframes`
	0% {
		transform:translate(-100rem, 100rem) rotate(-45deg);
	} 100% {
		transform:translate(0, 0) rotate(-45deg);
	}
`;

const MainDIV = styled.div`
	background: ${({ theme }: { theme: any }) => theme.mainBgColor};
`;

const Hello = styled.h2`
	position: absolute;
	transform: rotate(-45deg);
	font-size: 6rem;
	font-weight: 500;
	top: 7rem;
	left: 7rem;
	color: ${({ theme }: { theme: any }) => theme.mainHelloColor};
	text-shadow: ${({ theme }: { theme: any }) => theme.mainTextShadow};
`;
const ImHwang = styled.h1`
	position: absolute;
	transform: rotate(-45deg);
	font-size: 9rem;
	font-weight: 700;
	top: 9rem;
	left: -1rem;
	color: ${({ theme }: { theme: any }) => theme.mainImHColor};
	text-shadow: ${({ theme }: { theme: any }) => theme.mainTextShadow};
`;
const FE = styled.h1`
	position: absolute;
	transform: rotate(-45deg);
	font-size: 33rem;
	line-height: 26rem;
	font-weight: 700;
	top: -12rem;
	left: -10rem;
	color: ${({ theme }: { theme: any }) => theme.mainFEColor};
	text-shadow: ${({ theme }: { theme: any }) => theme.mainTextShadow};

	span:first-child {
		animation: ${fadeInFE1} 2s 1s;
	}
	span:last-child {
		animation: ${fadeInFE2} 2s 1s;
	}
`;

const Polygon1Styled = styled(Polygon1)`
	position: absolute;
	right: 30rem;
	top: 20rem;
	width: 65.7rem;
	z-index: 1;
	filter: drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.6));
	path {
		fill: ${({ theme }: { theme: any }) => theme.mainP1Color};
	}
`;
const Polygon2Styled = styled(Polygon2)`
	position: absolute;
	right: 27.9rem;
	top: 33rem;
	width: 55rem;
	z-index: 0;
	filter: drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.6));
	path {
		fill: ${({ theme }: { theme: any }) => theme.mainP2Color};
	}
`;
const HwangStyled = styled.img`
	position: absolute;
	right: 32.1rem;
	top: -1rem;
	z-index: 3;
	filter: drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.6));
`;

export default Main;
