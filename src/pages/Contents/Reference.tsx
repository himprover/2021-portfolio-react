import styled from 'styled-components';
import { forwardRef } from 'react';

const Reference = forwardRef<any>((props, ref) => {
	return <ReferenceDIV ref={ref}></ReferenceDIV>;
});

const ReferenceDIV = styled.div``;

export default Reference;
