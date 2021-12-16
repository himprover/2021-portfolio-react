import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from 'modules';
import ContactBG from '../../components/ContactBG';

function Contact() {
	const nowsection = useSelector(
		(state: RootState) => state.sectionHandle.nowsection
	);

	return (
		<ContactDIV>
			<ContactBG />
			<MainDIV className={nowsection === 4 ? 'show' : ''}>
				<RowDIV>
					<Title>Contact Me</Title>
				</RowDIV>
				<RowDIV>
					<SubTitle>joohyun@himprover.kr</SubTitle>
					<SubTitle>82+ 10 9872 1701</SubTitle>
				</RowDIV>
			</MainDIV>
		</ContactDIV>
	);
}

const ContactDIV = styled.div`
	position: relative;
	overflow: hidden;
	display: flex;
	align-items: center;
	justify-content: center;
	background: ${({ theme }: { theme: any }) =>
		theme.contactBgColor ? theme.contactBgColor : null};
`;

const MainDIV = styled.div`
	display: flex;
	flex-direction: column;
	text-align: center;
	text-shadow: ${({ theme }: { theme: any }) => theme.contactShadow};
	transition: opacity 0.5s 0.5s;
	opacity: 0;
	&.show {
		opacity: 1;
	}
`;

const RowDIV = styled.div``;

const Title = styled.h1`
	font-size: 10rem;
	font-weight: 500;
	color: ${({ theme }: { theme: any }) => theme.contactTitleColor};
`;

const SubTitle = styled.h2`
	font-size: 5rem;
	font-weight: 300;
	color: ${({ theme }: { theme: any }) => theme.contactSubTitleColor};
`;

export default Contact;
