import styled, { css, keyframes } from 'styled-components';

import Line from './Line';
import { useSelector } from 'react-redux';
import { RootState } from 'modules';
import { useEffect, useRef } from 'react';

function RedGreenLine() {
	const isLoading = useSelector((state: RootState) => state.loader.isLoading);
	const isLoadingRef = useRef<boolean>(isLoading);
	useEffect(() => {
		isLoadingRef.current = isLoading;
	}, [isLoading]);
	return (
		<LineDIV>
			<Line
				cssProps={RB}
				viewBox='0 0 60 3000'
				x1={3}
				x2={3}
				y2={300}
				color='#A82B11'
				isDash={false}
			/>
			<Line
				cssProps={GB}
				viewBox='0 0 60 3000'
				x1={3}
				x2={3}
				y2={300}
				color='#0A6A56'
				isDash={false}
			/>
			<Line
				cssProps={RS}
				viewBox='0 0 10 3000'
				x1={0.5}
				x2={0.5}
				y2={300}
				color='#A82B11'
				isDash={true}
			/>
			<Line
				cssProps={GS}
				viewBox='0 0 10 3000'
				x1={0.5}
				x2={0.5}
				y2={300}
				color='#0A6A56'
				isDash={true}
			/>
		</LineDIV>
	);
}

const LineDIV = styled.div`
	position: relative;
	width: 100%;
	height: 200vh;
	overflow: hidden;
`;
const rightIn = keyframes`
	0%{transform:rotate(45deg) translate(0,-500rem);}
	100%{transform:rotate(45deg) translate(0,0);}
`;

const RB = css`
	position: absolute;
	top: -51rem;
	right: 100rem;
	transform: rotate(45deg) translate(0, -500rem);
	z-index: 2;
	animation: ${rightIn} 1.5s 2s forwards;
`;

const GB = css`
	position: absolute;
	top: -51rem;
	right: 92rem;
	transform: rotate(45deg) translate(0, -500rem);
	filter: drop-shadow(5px 4px 4px rgba(0, 0, 0, 0.25));
	z-index: 2;
	animation: ${rightIn} 1.5s 2s forwards;
`;

const RS = css`
	position: absolute;
	top: -51rem;
	right: 87rem;
	transform: rotate(45deg) translate(0, -500rem);
	filter: drop-shadow(5px 4px 4px rgba(0, 0, 0, 0.25));
	z-index: 1;
	animation: ${rightIn} 1.5s 2s forwards;
`;

const GS = css`
	position: absolute;
	top: -51rem;
	right: 110rem;
	transform: rotate(45deg) translate(0, -500rem);
	filter: drop-shadow(5px 4px 4px rgba(0, 0, 0, 0.25));
	z-index: 1;
	animation: ${rightIn} 1.5s 2s forwards;
`;

export default RedGreenLine;
