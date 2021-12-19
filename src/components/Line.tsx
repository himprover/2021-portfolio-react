import styled, { CSSProp, keyframes } from 'styled-components';

interface LProps {
	x1: number;
	x2: number;
	y2: number;
	color: string;
	cssProps: CSSProp;
	isDash: boolean;
}

function Line({ x1, x2, y2, color, cssProps, isDash }: LProps) {
	const width = x1 + x2;
	const height = y2;
	//const count = useSelector((state: RootState) => state.counter.count);

	return (
		<StyledSvg
			xmlns='http://www.w3.org/2000/svg'
			viewBox={`0 0 ${x1 * 20} ${y2 * 10}`}
			width={width}
			height={height}
			cssProps={cssProps}>
			<StyledLine
				x1={x1 + '0px'}
				x2={x2 + '0px'}
				y2={y2 + '0px'}
				width={width}
				color={color}
				isDash={isDash}
			/>
		</StyledSvg>
	);
}

const StyledSvg = styled.svg<{ cssProps: CSSProp }>`
	width: ${(props) => props.width + 'rem'};
	height: ${(props) => props.height + 'rem'};
	${(props) => props.cssProps}
`;

const StyledLine = styled.line<{ isDash: boolean }>`
	stroke: ${(props) => props.color};
	//stroke-width: ${(props) => props.width + 'rem'};
	stroke-width: 60px;
	${(props) => (props.isDash ? 'stroke-dasharray: 40 15' : null)}
`;
export default Line;
