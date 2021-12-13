import styled, { css, keyframes } from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from 'modules';

import { ReactComponent as LightSVG } from '../../imgs/reference/svg/light.svg';
import { ReactComponent as ArrowSVG } from '../../imgs/reference/svg/arrow.svg';
import { useEffect, useState } from 'react';

function Reference() {
	const nowsection = useSelector(
		(state: RootState) => state.sectionHandle.nowsection
	);

	const [slide, setSlide] = useState<string[]>([
		'center',
		'right',
		'',
		'',
		'left',
	]);
	const slideHandle = (direction: string) => {
		console.log('클릭되니?' + direction);
		let tmpArray: string[] = [...slide];
		let tmp = '';
		console.log(tmpArray);
		if (direction === 'right') {
			tmp = tmpArray[0];
			tmpArray[0] = tmpArray[1];
			tmpArray[1] = tmpArray[2];
			tmpArray[2] = tmpArray[3];
			tmpArray[3] = tmpArray[4];
			tmpArray[4] = tmp;
		} else {
			tmp = tmpArray[4];
			tmpArray[4] = tmpArray[3];
			tmpArray[3] = tmpArray[2];
			tmpArray[2] = tmpArray[1];
			tmpArray[1] = tmpArray[0];
			tmpArray[0] = tmp;
		}
		setSlide(tmpArray);
		console.log(slide);
	};
	return (
		<ReferenceDIV nowsection={nowsection}>
			<Title nowsection={nowsection}>Reference</Title>
			<ArrowDIV nowsection={nowsection}>
				<Arrow direction='right' onClick={() => slideHandle('right')} />
			</ArrowDIV>
			<ListDIV nowsection={nowsection}>
				<List order={slide[0]}>1</List>
				<List order={slide[1]}>2</List>
				<List order={slide[2]}>3</List>
				<List order={slide[3]}>4</List>
				<List order={slide[4]}>5</List>
			</ListDIV>
			<ArrowDIV nowsection={nowsection}>
				<Arrow direction='left' onClick={() => slideHandle('left')} />
			</ArrowDIV>
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
`;

const List = styled.div<{ order?: string }>`
	background: #979797;
	flex-basis: 140rem;
	height: 70vh;
	margin: 0 auto;
	border: 1px solid black;
	flex-grow: 0;
	flex-shrink: 0;
	transform: translateX(-140rem);
	transition: all 1s;
	${(props) =>
		props.order === 'center'
			? css`
					order: 2;
					opacity: 1;
			  `
			: props.order === 'right'
			? css`
					order: 3;
					opacity: 0;
			  `
			: props.order === 'left'
			? css`
					order: 1;
					opacity: 0;
			  `
			: css`
					display: none;
			  `};
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
		props.direction === 'right'
			? css`
					transform: rotate(180deg);
			  `
			: ''};
`;

export default Reference;
