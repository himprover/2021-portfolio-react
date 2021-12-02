import styled from 'styled-components';

import Line from './Line';

function RedGreenLine() {
	return (
		<>
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
		</>
	);
}

const LineDIV = styled.div``;

const RB = `
	position: absolute;
	top: -51rem;
    right: 100rem;
	transform:rotate(45deg);
	z-index:2;
`;

const GB = `
	position: absolute;
	top: -51rem;
    right: 92rem;
	transform:rotate(45deg);
	filter: drop-shadow(5px 4px 4px rgba(0, 0, 0, 0.25));
	z-index:2;
`;

const RS = `
	position: absolute;
	top: -51rem;
    right: 87rem;
	transform:rotate(45deg);
	filter: drop-shadow(5px 4px 4px rgba(0, 0, 0, 0.25));
	z-index:1;
`;

const GS = `
	position: absolute;
	top: -51rem;
    right: 110rem;
	transform:rotate(45deg);
	filter: drop-shadow(5px 4px 4px rgba(0, 0, 0, 0.25));
	z-index:1;
`;

export default RedGreenLine;
