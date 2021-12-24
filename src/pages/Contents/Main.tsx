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
			<BG />
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
	position: relative;
`;
const BG = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 0;
	opacity: 0;
	transition: opacity 0.5s ease-in-out;
	${({ theme }: { theme: any }) =>
		theme.colorMode === 'dark'
			? css`
					opacity: 1;
					background: ${theme.mainBgColor};
			  `
			: css`
					opacity: 0;
					background: ${theme.mainBgColor};
			  `};
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

const PolyFadeInMedia = keyframes`
	0% {
		opacity:0;
		transform-origin : 0 100%;
		transform: rotate(-15deg) translateX(30rem);
	}
	 1%{ 
		opacity:1;
	} 100% {
		opacity:1;
		transform-origin : 0 100%;
		transform: rotate(0) translateX(30rem);
	}`;

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
	&:hover {
		z-index: 5;
	}
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
	&:hover {
		z-index: 5;
	}
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
	top: 25rem;
	right: 33rem;
	width: 65.7rem;
	height: auto;
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
	@media only screen and (max-width: 512px) {
		transform: translateX(30rem);
	}
`;

const Polygon2Styled = styled(Polygon2)<{
	nowsection: number;
	isloading: boolean;
}>`
	position: absolute;
	top: 44.3rem;
	right: 30.5rem;
	transform-origin: 0 100%;
	width: 55rem;
	height: auto;
	z-index: 0;
	opacity: 0;
	filter: drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.6));
	path {
		fill: ${({ theme }: { theme: any }) => theme.mainP2Color};
	}

	${(props) =>
		props.nowsection === 0 && !props.isloading
			? css`
					@media only screen and (max-width: 512px) {
						transform: translateX(30rem);
						animation: ${PolyFadeInMedia} 1s 2.5s forwards;
					}
					@media only screen and (min-width: 513px) {
						animation: ${PolyFadeIn} 1s 2.5s forwards;
					}
			  `
			: css`
					animation: ${fadeOut} 1s backwards;
			  `}
`;
const HwangStyled = styled.img<{ nowsection: number; isloading: boolean }>`
	position: absolute;
	width: 67rem;
	top: -2rem;
	right: 32rem;
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
	@media only screen and (max-width: 512px) {
		transform: translateX(30rem);
	}
`;

export default Main;
