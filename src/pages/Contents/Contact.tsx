import styled from 'styled-components';
import { forwardRef } from 'react';

import ContactBG from '../../components/ContactBG';

const Contact = forwardRef<any>((props, ref) => {
	return (
		<ContactDIV ref={ref}>
			<ContactBG />
		</ContactDIV>
	);
});

const ContactDIV = styled.div`
	overflow: hidden;
`;

export default Contact;
