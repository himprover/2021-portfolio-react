import styled, { keyframes, css } from 'styled-components';

import Hwang from 'imgs/main/Hwang.png';
import { ReactComponent as Polygon1 } from 'imgs/main/polygon1.svg';
import { ReactComponent as Polygon2 } from 'imgs/main/polygon2.svg';

import RedGreenLine from 'components/RedGreenLine';
import { useSelector } from 'react-redux';
import { RootState } from 'modules';

function Main() {
	const nowsection = useSelector(
		(state: RootState) => state.sectionHandle.nowsection
	);
	const isLoading = useSelector((state: RootState) => state.loader.isLoading);
	return (
		<MainDIV>
			<RedGreenLine />
			<Hello nowsection={nowsection} isloading={isLoading}>
				Hello
			</Hello>
			<ImHwang nowsection={nowsection} isloading={isLoading}>
				I'm Hwang
			</ImHwang>
			<FETOP nowsection={nowsection} isloading={isLoading}>
				FRONT
			</FETOP>
			<FEBOTTOM nowsection={nowsection} isloading={isLoading}>
				Developer
			</FEBOTTOM>
			<Polygon1Styled nowsection={nowsection} isloading={isLoading} />
			<Polygon2Styled nowsection={nowsection} isloading={isLoading} />
			<HwangStyled src={Hwang} nowsection={nowsection} isloading={isLoading} />
		</MainDIV>
	);
}

const MainDIV = styled.div`
	background: ${({ theme }: { theme: any }) => theme.mainBgColor};
`;

const PolyFadeIn = keyframes`
	0% {
		opacity:0;
		transform-origin : 0 100%;
		transform:rotate(-15deg);
	} 1%{ 
		opacity:1;
	} 100% {
		opacity:1;
		transform-origin : 0 100%;
		transform:rotate(0);
	}
`;

const fadeIn = keyframes`
	0% {
		opacity:0;
	} 100% {
		opacity:1;
	}
`;

const fadeOut = keyframes`
	0% {
		opacity:1;
	} 100% {
		opacity:0;
	}
`;

const rightIn = keyframes`
	0% {
		transform:translate(200rem, -200rem) rotate(-45deg);
	} 100% {
		transform:translate(0, 0) rotate(-45deg);
	}
`;
const rightOut = keyframes`
	0% {
		transform:translate(0, 0) rotate(-45deg);
	} 100% {
		transform:translate(200rem, -200rem) rotate(-45deg);
	}
`;
const leftIn = keyframes`
	0% {
		transform:translate(-200rem, 200rem) rotate(-45deg);
	} 100% {
		transform:translate(0, 0) rotate(-45deg);
	}
`;
const leftOut = keyframes`
	0% {
		transform:translate(0, 0) rotate(-45deg);
	} 100% {
		transform:translate(-200rem, 200rem) rotate(-45deg);
		
	}
`;

const Hello = styled.h2<{ nowsection: number; isloading: boolean }>`
	opacity: 0;
	position: absolute;
	transform: rotate(-45deg);
	font-size: 6rem;
	font-weight: 500;
	top: 7rem;
	left: 7rem;
	color: ${({ theme }: { theme: any }) => theme.mainHelloColor};
	text-shadow: ${({ theme }: { theme: any }) => theme.mainTextShadow};

	${(props) =>
		props.nowsection === 0 && !props.isloading
			? css`
					animation: ${fadeIn} 1s 1s forwards;
			  `
			: css`
					animation: ${fadeOut} 1s 1s backwards;
			  `}
`;
const ImHwang = styled.h1<{ nowsection: number; isloading: boolean }>`
	opacity: 0;
	position: absolute;
	transform: rotate(-45deg);
	font-size: 9rem;
	font-weight: 700;
	top: 9rem;
	left: -1rem;
	color: ${({ theme }: { theme: any }) => theme.mainImHColor};
	text-shadow: ${({ theme }: { theme: any }) => theme.mainTextShadow};
	${(props) =>
		props.nowsection === 0 && !props.isloading
			? css`
					animation: ${fadeIn} 1s 1.3s forwards;
			  `
			: css`
					animation: ${fadeOut} 1s backwards;
			  `}
`;
const FE = styled.h1`
	position: absolute;
	transform: rotate(-45deg);
	font-size: 33rem;
	line-height: 26rem;
	font-weight: 700;
	color: ${({ theme }: { theme: any }) => theme.mainFEColor};
	text-shadow: ${({ theme }: { theme: any }) => theme.mainTextShadow};
`;

const FETOP = styled(FE)<{ nowsection: number; isloading: boolean }>`
	top: -4rem;
	left: -12rem;
	transform: translate(200rem, -200rem) rotate(-45deg);
	${(props) =>
		props.nowsection === 0 && !props.isloading
			? css`
					animation: ${rightIn} 1s 1.5s forwards;
			  `
			: css`
					animation: ${rightOut} 1s forwards;
			  `}
`;

const FEBOTTOM = styled(FE)<{ nowsection: number; isloading: boolean }>`
	top: -2rem;
	left: 0rem;

	transform: translate(-200rem, 200rem) rotate(-45deg);
	${(props) =>
		props.nowsection === 0 && !props.isloading
			? css`
					animation: ${leftIn} 1s 1.5s forwards;
			  `
			: css`
					animation: ${leftOut} 1s forwards;
			  `}
`;

const Polygon1Styled = styled(Polygon1)<{
	nowsection: number;
	isloading: boolean;
}>`
	position: absolute;
	right: 30rem;
	top: 20rem;
	width: 65.7rem;
	z-index: 1;
	opacity: 0;
	filter: drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.6));
	path {
		fill: ${({ theme }: { theme: any }) => theme.mainP1Color};
	}
	${(props) =>
		props.nowsection === 0 && !props.isloading
			? css`
					animation: ${fadeIn} 1s 1.8s forwards;
			  `
			: css`
					animation: ${fadeOut} 1s backwards;
			  `}
`;
const Polygon2Styled = styled(Polygon2)<{
	nowsection: number;
	isloading: boolean;
}>`
	position: absolute;
	right: 27.9rem;
	top: 33rem;
	width: 55rem;
	z-index: 0;
	opacity: 0;
	filter: drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.6));
	path {
		fill: ${({ theme }: { theme: any }) => theme.mainP2Color};
	}
	${(props) =>
		props.nowsection === 0 && !props.isloading
			? css`
					animation: ${PolyFadeIn} 1s 2.5s forwards;
			  `
			: css`
					animation: ${fadeOut} 1s backwards;
			  `}
`;
const HwangStyled = styled.img<{ nowsection: number; isloading: boolean }>`
	position: absolute;
	right: 32.1rem;
	top: -1rem;
	z-index: 3;
	opacity: 0;
	filter: drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.6));
	${(props) =>
		props.nowsection === 0 && !props.isloading
			? css`
					animation: ${fadeIn} 1s 1.8s forwards;
			  `
			: css`
					animation: ${fadeOut} 1s backwards;
			  `}
`;

export default Main;
