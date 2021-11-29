import styled from 'styled-components';
import { forwardRef } from 'react';

const Contact = forwardRef<any>((props, ref) => {
	return <ContactDIV ref={ref}></ContactDIV>;
});

const ContactDIV = styled.div``;

export default Contact;
