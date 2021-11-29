import styled from 'styled-components';
import { forwardRef } from 'react';

const Hobby = forwardRef<any>((props, ref) => {
	return <HobbyDIV ref={ref}></HobbyDIV>;
});

const HobbyDIV = styled.div``;

export default Hobby;
