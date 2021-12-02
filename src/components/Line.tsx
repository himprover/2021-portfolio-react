import styled, { css } from 'styled-components';

interface LProps {
	viewBox: string;
	x1: number;
	x2: number;
	y2: number;
	color: string;
}

function Line({ viewBox, x1, x2, y2, color }: LProps) {
	const width = x1 + x2;
	const height = y2;

	return (
		<StyledSvg
			xmlns='http://www.w3.org/2000/svg'
			viewBox={viewBox}
			width={width}
			height={height}>
			<StyledLine
				x1={x1 + 'rem'}
				x2={x2 + 'rem'}
				y2={y2 + 'rem'}
				width={width}
				color={color}
			/>
		</StyledSvg>
	);
}
const StyledSvg = styled.svg`
	width: ${(props) => props.width + 'rem'};
	height: ${(props) => props.height + 'rem'};
`;
const StyledLine = styled.line`
	stroke: ${(props) => props.color};
	stroke-width: ${(props) => props.width + 'rem'};
`;
export default Line;
