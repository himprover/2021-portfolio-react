import styled from 'styled-components';
import { forwardRef } from 'react';

const Main = forwardRef<any>((props, ref) => {
	return (
		<MainDIV ref={ref}>
			<TextDIV>
				<Hello>Hello</Hello>
				<ImHwang>I'm Hwang</ImHwang>
				<FE>
					<span>FRONT</span>
					<br />
					<span>Developer</span>
				</FE>
			</TextDIV>
			<ImgDIV></ImgDIV>
		</MainDIV>
	);
});

const MainDIV = styled.div`
	background: ${({ theme }: { theme: any }) => theme.mainBgColor};
	overflow: hidden;
`;

const TextDIV = styled.div``;
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

const ImgDIV = styled.div``;

const Img = styled.img``;

export default Main;
