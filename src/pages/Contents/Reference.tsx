import styled, { css, keyframes } from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from 'modules';

import { ReactComponent as LightSVG } from '../../imgs/reference/svg/light.svg';
import { ReactComponent as ArrowSVG } from '../../imgs/reference/svg/arrow.svg';

function Reference() {
	const nowsection = useSelector(
		(state: RootState) => state.sectionHandle.nowsection
	);
	const direction = useSelector(
		(state: RootState) => state.sectionHandle.direction
	);
	return (
		<ReferenceDIV nowsection={nowsection}>
			<Title nowsection={nowsection}>Reference</Title>
			<ListDIV nowsection={nowsection}>
				<ArrowDIV>
					<Arrow direction='right' />
				</ArrowDIV>
				<List />
				<ArrowDIV>
					<Arrow direction='left' />
				</ArrowDIV>
			</ListDIV>
			<Light nowsection={nowsection} />
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

const ReferenceDIV = styled.div<{ nowsection: number }>`
	background: black;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	overflow: hidden;
	position: fixed;
	top: 0;
	z-index: 10;
	width: 100%;
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
`;

const List = styled.div`
	background: #979797;
	width: 140rem;
	margin: 0 auto;
`;

const Light = styled(LightSVG)<{ nowsection: number }>`
	position: absolute;
	opacity: 0;
	bottom: 0;
	left: 50%;
	width: 40rem;
	transform: rotate(180deg) translateX(50%);
	filter: drop-shadow(0px 10px 40px white);
	${(props) =>
		props.nowsection === 2
			? css`
					animation: ${blink} 0.5s 0.5s forwards;
			  `
			: css`
					opacity: 1;
			  `}
`;

const ArrowDIV = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	width: 10vw;
`;

const Arrow = styled(ArrowSVG)`
	width: 3rem;
	display: block;
	cursor: pointer;
	${(props) =>
		props.direction === 'right'
			? css`
					transform: rotate(180deg);
			  `
			: ''};
`;

export default Reference;
