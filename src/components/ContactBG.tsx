import styled, { css, keyframes } from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from 'modules';

function ContactBG() {
	const nowsection = useSelector(
		(state: RootState) => state.sectionHandle.nowsection
	);

	return (
		<BGDIV>
			<BgText
				top='-160rem'
				left='-70rem'
				className='leftshow'
				nowsection={nowsection}>
				THANK YOU
			</BgText>
			<BgText
				top='-130rem'
				left='-60rem'
				className='rightshow'
				nowsection={nowsection}>
				YOU THANK
			</BgText>
			<BgText
				top='-50rem'
				left='-100rem'
				className='leftshow'
				nowsection={nowsection}>
				YOU <HighLight color='#05362c'>THANK</HighLight> YOU
			</BgText>
			<BgText
				top='-10rem'
				left='-100rem'
				className='rightshow'
				nowsection={nowsection}>
				THANK YOU THANK YOU
			</BgText>
			<BgText
				top='30rem'
				left='-100rem'
				className='leftshow'
				nowsection={nowsection}>
				THANK YOU THANK YOU
			</BgText>
			<BgText
				top='-30rem'
				left='-00rem'
				className='rightshow'
				nowsection={nowsection}>
				THANK <HighLight color='#551408'>YOU</HighLight> THANK
			</BgText>
			<BgText
				top='-0rem'
				left='10rem'
				className='leftshow'
				nowsection={nowsection}>
				THANK YOU THANK
			</BgText>
		</BGDIV>
	);
}

const leftshow = keyframes`
	from {transform: rotate(-45deg) translateX(-100%);}
	to {transform: rotate(-45deg) translateX(0);}
`;
const rightshow = keyframes`
	from {transform: rotate(-45deg) translateX(100%);}
	to {transform: rotate(-45deg) translateX(0);}
`;

const lefthidden = keyframes`
	from {transform: rotate(-45deg) translateX(0);}
	to {transform: rotate(-45deg) translateX(-100%);}
`;
const righthidden = keyframes`
	from {transform: rotate(-45deg) translateX(0);}
	to {transform: rotate(-45deg) translateX(100%);}
`;

const BGDIV = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	cursor: default;
	z-index: -1;
`;
const BgText = styled.p<{ top: string; left: string; nowsection: number }>`
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
	${(props) =>
		props.nowsection === 4
			? css`
					&.leftshow {
						animation: ${leftshow} 1.2s ease-out forwards;
					}
					&.rightshow {
						animation: ${rightshow} 1.2s ease-out forwards;
					}
			  `
			: css`
					&.leftshow {
						animation: ${lefthidden} 1s ease-in-out forwards;
					}
					&.rightshow {
						animation: ${righthidden} 1s ease-in-out forwards;
					}
			  `}
`;

const HighLight = styled.span<{ color: string }>`
	color: ${(props) => props.color};
`;

export default ContactBG;
