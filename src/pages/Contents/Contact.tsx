import styled from 'styled-components';

import ContactBG from '../../components/ContactBG';

function Contact() {
	return (
		<ContactDIV>
			<ContactBG />
			<MainDIV>
				<RowDIV>
					<Title>Contact Me</Title>
				</RowDIV>
				<RowDIV>
					<SubTitle>hwang@hwang.com</SubTitle>
					<SubTitle>82+ 10 9872 1701</SubTitle>
				</RowDIV>
			</MainDIV>
		</ContactDIV>
	);
}

const ContactDIV = styled.div`
	overflow: hidden;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const MainDIV = styled.div`
	display: flex;
	flex-direction: column;
	text-align: center;
	text-shadow: 4px 4px 4px #000000;
`;

const RowDIV = styled.div``;

const Title = styled.h1`
	font-size: 10rem;
	font-weight: 500;
`;

const SubTitle = styled.h2`
	font-size: 5rem;
	font-weight: 300;
`;

export default Contact;
