import styled, { CSSProp, keyframes } from 'styled-components';

interface LProps {
	viewBox: string;
	x1: number;
	x2: number;
	y2: number;
	color: string;
	cssProps: CSSProp;
	isDash: boolean;
}

function Line({ viewBox, x1, x2, y2, color, cssProps, isDash }: LProps) {
	const width = x1 + x2;
	const height = y2;
	//const count = useSelector((state: RootState) => state.counter.count);

	return (
		<StyledSvg
			xmlns='http://www.w3.org/2000/svg'
			viewBox={viewBox}
			width={width}
			height={height}
			cssProps={cssProps}>
			<StyledLine
				x1={x1 + 'rem'}
				x2={x2 + 'rem'}
				y2={y2 + 'rem'}
				width={width}
				color={color}
				isDash={isDash}
			/>
		</StyledSvg>
	);
}
const rightIn = keyframes`
	0%{transform:rotate(45deg) translate(0,-500rem);}
	100%{transform:rotate(45deg) translate(0,0);}
`;
const StyledSvg = styled.svg<{ cssProps: CSSProp }>`
	width: ${(props) => props.width + 'rem'};
	height: ${(props) => props.height + 'rem'};
	${(props) => props.cssProps}
	animation: ${rightIn} 1s 3s forwards;
`;
const StyledLine = styled.line<{ isDash: boolean }>`
	stroke: ${(props) => props.color};
	stroke-width: ${(props) => props.width + 'rem'};
	${(props) => (props.isDash ? 'stroke-dasharray: 40 15' : null)}
`;
export default Line;
