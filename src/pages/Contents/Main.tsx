import styled from 'styled-components';
import { forwardRef } from 'react';

const Main = forwardRef<any>((props, ref) => {
	return (
		<MainDIV ref={ref}>
			<LeftDIV></LeftDIV>
			<RightDIV></RightDIV>
		</MainDIV>
	);
});

const MainDIV = styled.div``;

const LeftDIV = styled.div``;
const RightDIV = styled.div``;

const Img = styled.img``;

export default Main;
