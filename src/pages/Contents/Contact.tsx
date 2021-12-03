import styled from 'styled-components';
import { forwardRef } from 'react';

import ContactBG from '../../components/ContactBG';

const Contact = forwardRef<any>((props, ref) => {
	return (
		<ContactDIV ref={ref}>
			<ContactBG />
			<MainDIV>
				<RowDIV>
					<Title>Contact Me</Title>
				</RowDIV>
				<RowDIV>
					<SubTitle>EMAIL : hwang@hwang.com</SubTitle>
					<SubTitle>PHONE : 82+ 10 9872 1701</SubTitle>
				</RowDIV>
			</MainDIV>
		</ContactDIV>
	);
});

const ContactDIV = styled.div`
	overflow: hidden;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const MainDIV = styled.div`
	display: flex;
	flex-direction: column;
	text-shadow: 4px 4px 4px #000000;
`;

const RowDIV = styled.div``;

const Title = styled.h1`
	font-size: 10rem;
	font-weight: 500;
	text-align: center;
`;

const SubTitle = styled.h2`
	font-size: 7rem;
	font-weight: 300;
`;

export default Contact;
