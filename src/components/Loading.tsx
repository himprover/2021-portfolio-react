import { useEffect, useState } from 'react';
import styled, { keyframes, css } from 'styled-components';

interface LProps {
	isLoading: boolean;
}

function Loading(props: LProps) {
	const [vh, setVh] = useState<number>(window.innerHeight);
	const [vw, setVw] = useState<number>(window.innerWidth);

	const handleResize = () => {
		setVh(window.innerHeight);
		setVw(window.innerWidth);
	};

	useEffect(() => {
		//if (props.isLoading === true) {
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
		//}
	});

	const RedHorizontal = `M 0, ${vh / 2} L ${vw / 2}, ${vh / 2} `;
	const RedVertical1 = `M ${vw / 2 - 1}, ${vh / 2} L ${
		vw / 2 + vw / 10 - 1
	}, 0 `;
	const RedVertical2 = `M  ${vw / 2 - 1}, ${vh / 2} L ${
		vw / 2 - vw / 10 - 1
	}, ${vh} `;
	const GreenHorizontal = `M ${vw}, ${vh / 2} L ${vw / 2}, ${vh / 2} `;
	const GreenVertical1 = `M ${vw / 2 + 1}, ${vh / 2} L ${
		vw / 2 + vw / 10 + 1
	}, 0 `;
	const GreenVertical2 = `M  ${vw / 2 + 1}, ${vh / 2} L ${
		vw / 2 - vw / 10 + 1
	}, ${vh} `;

	return (
		<LoadingDIV isLoading={props.isLoading}>
			<svg height={vh} width={vw}>
				<FirstPath
					d={RedHorizontal}
					stroke='#A82B11'
					fill='none'
					storke-width='1'
				/>
				<SecondPath
					d={RedVertical1}
					stroke='#A82B11'
					fill='none'
					storke-width='1'
				/>
				<SecondPath
					d={RedVertical2}
					stroke='#A82B11'
					fill='none'
					storke-width='1'
				/>
				<FirstPath
					d={GreenHorizontal}
					stroke='#0A6A56'
					fill='none'
					storke-width='1'
				/>
				<SecondPath
					d={GreenVertical1}
					stroke='#0A6A56'
					fill='none'
					storke-width='1'
				/>
				<SecondPath
					d={GreenVertical2}
					stroke='#0A6A56'
					fill='none'
					storke-width='1'
				/>
			</svg>
		</LoadingDIV>
	);
}

const LoadingDIV = styled.div<{ isLoading: boolean }>`
	position: fixed;
	width: 100vw;
	height: 100vh;
	top: 0;
	left: 0;
	z-index: 999;
	background: black;
	opacity: 1;
	transition: opacity 0.5s ease-in-out;
	${(props) =>
		props.isLoading === true
			? css`
					opacity: 1;
			  `
			: css`
					opacity: 0;
			  `}
`;

const strokeAnimation = keyframes`
	0% {
	} 100% {
		stroke-dashoffset: 50vw;
		stroke-dasharray: 50vw;
	}
`;

const Path = styled.path`
	stroke-dasharray: 50vw;
	stroke-dashoffset: 150vw;
`;

const FirstPath = styled(Path)`
	animation: ${strokeAnimation} 1s cubic-bezier(0.785, 0.135, 0.15, 0.86)
		forwards;
`;

const SecondPath = styled(Path)`
	stroke-dasharray: 50vw;
	stroke-dashoffset: 150vw;
	animation: ${strokeAnimation} 1.5s 0.5s cubic-bezier(0.33, 1, 0.68, 1)
		forwards;
`;
export default Loading;
