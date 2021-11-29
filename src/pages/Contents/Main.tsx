import styled from 'styled-components';
import { forwardRef } from 'react';

const Main = forwardRef<any>((props, ref) => {
	return <MainDIV ref={ref}></MainDIV>;
});

const MainDIV = styled.div``;

export default Main;
