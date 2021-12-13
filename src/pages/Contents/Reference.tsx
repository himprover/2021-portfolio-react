import styled, { css } from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from 'modules';

import { ReactComponent as LightSVG } from '../../imgs/reference/svg/light.svg';
import { ReactComponent as ArrowSVG } from '../../imgs/reference/svg/arrow.svg';

function Reference() {
	const nowsection = useSelector(
		(state: RootState) => state.sectionHandle.nowsection
	);
	return (
		<ReferenceDIV nowsection={nowsection}>
			<Title>Skills</Title>
			<ListDIV>
				<ArrowDIV>
					<Arrow direction='right' />
				</ArrowDIV>
				<List />
				<ArrowDIV>
					<Arrow direction='left' />
				</ArrowDIV>
			</ListDIV>
			<Light />
		</ReferenceDIV>
	);
}

const ReferenceDIV = styled.div<{ nowsection: number }>`
	background: black;
	overflow: hidden;
	position: relative;
	height: 100vh;
	z-index: 10;

	/* ${(props) =>
		props.nowsection === 2
			? css`
					opacity: 1;
					display: block;
			  `
			: css`
					opacity: 0;
					display: none;
			  `} */
`;

const Title = styled.h1`
	font-size: 6rem;
	font-weight: 400;
	margin: 0;
	padding-left: 3rem;
	padding-top: 3rem;
	padding-bottom: 3rem;
`;

const ListDIV = styled.div`
	display: flex;
	height: 70vh;
`;

const List = styled.div`
	background: #979797;
	//width: 80vw;
	margin: 0 auto;
`;

const Light = styled(LightSVG)`
	position: absolute;
	bottom: 0;
	left: 50%;
	width: 40rem;
	transform: rotate(180deg) translateX(50%);
	filter: drop-shadow(0px 10px 40px white);
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
