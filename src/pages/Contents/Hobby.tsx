import styled from 'styled-components';
import { forwardRef } from 'react';

const Hobby = forwardRef<any>((props, ref) => {
	return (
		<HobbyDIV ref={ref}>
			<Title>Hobby</Title>
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

export default Hobby;
