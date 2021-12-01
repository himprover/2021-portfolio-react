import styled from 'styled-components';
import { forwardRef } from 'react';

import Hwang from '../../imgs/main/Hwang.png';
import { ReactComponent as Polygon1 } from '../../imgs/main/polygon1.svg';
import { ReactComponent as Polygon2 } from '../../imgs/main/polygon2.svg';

import greenBigLine from '../../imgs/main/greenBigLine.svg';
import greenSmallLine from '../../imgs/main/greenSmallLine.svg';
import redBigLine from '../../imgs/main/redBigLine.svg';
import redSmallLine from '../../imgs/main/redSmallLine.svg';
const Main = forwardRef<any>((props, ref) => {
	return (
		<MainDIV ref={ref}>
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
			<GBline src={greenBigLine} />
			<RBline src={redBigLine} />
			<GSline src={greenSmallLine} />
			<RSline src={redSmallLine} />
		</MainDIV>
	);
});

const MainDIV = styled.div`
	background: ${({ theme }: { theme: any }) => theme.mainBgColor};
	overflow: hidden;
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

const GBline = styled.img`
	position: absolute;
	top: -4rem;
	right: -9rem;
	z-index: 2;
	filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;
const GSline = styled.img`
	position: absolute;
	top: -4.2rem;
	right: 8rem;
	z-index: 0;
	filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

const RBline = styled.img`
	position: absolute;
	top: -4.2rem;
	right: -1rem;
	z-index: 2;
`;
const RSline = styled.img`
	position: absolute;
	top: -4rem;
	right: -18rem;
	z-index: 0;
	filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

export default Main;
