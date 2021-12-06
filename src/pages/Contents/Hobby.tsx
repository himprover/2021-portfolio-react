import styled from 'styled-components';
import { forwardRef } from 'react';

import HobbyPng1 from 'imgs/hobby/png/hobby1.png';
import HobbyPng2 from 'imgs/hobby/png/hobby2.png';
const Hobby = forwardRef<any>((props, ref) => {
	return (
		<HobbyDIV ref={ref}>
			<Title>Hobby</Title>
			<HobbyImg1 src={HobbyPng1} />
			<HobbyImg2 src={HobbyPng2} />
		</HobbyDIV>
	);
});

const HobbyDIV = styled.div`
	background: radial-gradient(
		82.47% 260.66% at 16.85% 50%,
		#474747 0%,
		#2e2e2e 20.83%,
		#212121 100%
	);
`;

const Title = styled.h1`
	font-size: 6rem;
	font-weight: 400;
	margin: 0;
	padding-left: 3rem;
	padding-top: 3rem;
`;

const HobbyImg1 = styled.img`
	position: absolute;
	left: 10rem;
	top: 50%;
	transform: translateY(-50%);
	width: 60rem;
	z-index: 1;
	filter: drop-shadow(5px 5px 5px #00000070);
`;

const HobbyImg2 = styled.img`
	position: absolute;
	left: 18rem;
	top: 50%;
	transform: translateY(-40.5%);
	width: 55rem;
	z-index: 0;
	filter: drop-shadow(5px 5px 5px #00000070);
`;

export default Hobby;
