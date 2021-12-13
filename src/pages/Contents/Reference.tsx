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
		<ReferenceDIV nowsection={nowsection} direction={direction}>
			<Title>Reference</Title>
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

const ReferenceDIV = styled.div<{ nowsection: number; direction: string }>`
	background: black;
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
