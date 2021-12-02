import styled from 'styled-components';

import { ReactComponent as GBsvg } from '../imgs/main/greenBigLine.svg';
import { ReactComponent as GSsvg } from '../imgs/main/greenSmallLine.svg';
import { ReactComponent as RBsvg } from '../imgs/main/redBigLine.svg';
import { ReactComponent as RSsvg } from '../imgs/main/redSmallLine.svg';

function RedGreenLine() {
	return (
		<LineDIV>
			<GB />
			<RB />
			<RS />
			<GS />
		</LineDIV>
	);
}

const LineDIV = styled.div``;

const RB = styled(RBsvg)`
	position: absolute;
	top: -5rem;
	right: -6rem;
	z-index: 2;
	width: 200rem;
	height: 200rem;
	rect {
		width: 3rem;
		height: 200rem;
	}
`;
const GB = styled(GBsvg)`
	position: absolute;
	top: -5rem;
	right: -13.9rem;
	z-index: 2;
	filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
	width: 200rem;
	height: 200rem;
	rect {
		width: 3rem;
		height: 200rem;
	}
`;

const RS = styled(RSsvg)`
	position: absolute;
	top: 6rem;
	right: -6rem;
	z-index: 1;
	width: 200rem;
	height: 200rem;
	filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
	path {
		stroke-width: 0.7rem;
		stroke-dasharray: 1.5rem;
		height: 200rem;
	}
`;

const GS = styled(GSsvg)`
	position: absolute;
	top: -3rem;
	right: 7rem;
	z-index: 1;
	width: 200rem;
	height: 200rem;
	filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
	path {
		stroke-width: 0.7rem;
		stroke-dasharray: 1.5rem;
		height: 200rem;
	}
`;

export default RedGreenLine;
