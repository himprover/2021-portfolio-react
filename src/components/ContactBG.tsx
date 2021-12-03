import styled from 'styled-components';

function ContactBG() {
	return (
		<BGDIV>
			<BgText top='-160rem' left='-70rem'>
				THANK YOU
			</BgText>
			<BgText top='-130rem' left='-60rem'>
				YOU THANK
			</BgText>
			<BgText top='-50rem' left='-100rem'>
				YOU <HighLight color='#05362c'>THANK</HighLight> YOU
			</BgText>
			<BgText top='-10rem' left='-100rem'>
				THANK YOU THANK YOU
			</BgText>
			<BgText top='30rem' left='-100rem'>
				THANK YOU THANK YOU
			</BgText>
			<BgText top='-30rem' left='-00rem'>
				THANK <HighLight color='#551408'>YOU</HighLight> THANK
			</BgText>
			<BgText top='-0rem' left='10rem'>
				THANK YOU THANK
			</BgText>
		</BGDIV>
	);
}

const BGDIV = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	cursor: default;
	z-index: -1;
`;
const BgText = styled.p<{ top: string; left: string }>`
	position: absolute;
	display: block;
	top: ${(props) => props.top};
	left: ${(props) => props.left};
	font-size: 33rem;
	font-weight: 700;
	letter-spacing: -1rem;
	width: 400rem;
	transform: rotate(-45deg);
	color: #2f2f2f;
	text-shadow: 5px 5px 2px rgba(0, 0, 0, 0.3);
`;

const HighLight = styled.span<{ color: string }>`
	color: ${(props) => props.color};
`;

export default ContactBG;
