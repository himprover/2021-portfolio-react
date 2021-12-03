import styled from 'styled-components';
import { forwardRef } from 'react';

import { ReactComponent as LightSVG } from '../../imgs/reference/svg/light.svg';

const Reference = forwardRef<any>((props, ref) => {
	return (
		<ReferenceDIV ref={ref}>
			<Title>Skills</Title>
			<ListDIV></ListDIV>
			<Light />
		</ReferenceDIV>
	);
});

const ReferenceDIV = styled.div`
	background: black;
	overflow: hidden;
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
	width: 85vw;
	height: 70vh;
	margin: 0 auto;
	background: #9b9b9b;
`;

const Light = styled(LightSVG)`
	position: absolute;
	bottom: 0;
	left: 50%;
	width: 40rem;
	transform: rotate(180deg) translateX(50%);
	filter: drop-shadow(0px 10px 40px white);
`;

export default Reference;
