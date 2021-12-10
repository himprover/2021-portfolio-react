import { useEffect, useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'modules';
import { set } from 'modules/loader';

function Loading() {
	const [vh, setVh] = useState<number>(window.innerHeight);
	const [vw, setVw] = useState<number>(window.innerWidth);
	const isLoading = useSelector((state: RootState) => state.loader.isLoading); // Redux_count load
	const dispatch = useDispatch(); // use dispatch

	const [loadState, setLoad] = useState<boolean>(isLoading);

	const onSET = () => {
		dispatch(set());
	};

	const handleResize = () => {
		setVh(window.innerHeight);
		setVw(window.innerWidth);
	};

	useEffect(() => {
		let LoadingSetTime = setTimeout(() => {
			onSET();
			console.log('이거');
			setTimeout(() => {
				setLoad(false);
				console.log('요거');
			}, 1000);
		}, 1000);
		return () => clearTimeout(LoadingSetTime);
	}, [isLoading]);

	useEffect(() => {
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	});

	// prettier-ignore
	const RedHorizontal = `M 0, ${vh / 2} L ${vw / 2}, ${vh / 2} `;
	// prettier-ignore
	const RedVertical1 = `M ${vw / 2 - 1}, ${vh / 2} L ${vw / 2 + vw / 10 - 1}, 0 `;
	// prettier-ignore
	const RedVertical2 = `M  ${vw / 2 - 1}, ${vh / 2} L ${vw / 2 - vw / 10 - 1}, ${vh} `;
	// prettier-ignore
	const GreenHorizontal = `M ${vw}, ${vh / 2} L ${vw / 2}, ${vh / 2} `;
	// prettier-ignore
	const GreenVertical1 = `M ${vw / 2 + 1}, ${vh / 2} L ${	vw / 2 + vw / 10 + 1}, 0 `;
	// prettier-ignore
	const GreenVertical2 = `M  ${vw / 2 + 1}, ${vh / 2} L ${vw / 2 - vw / 10 + 1}, ${vh}`;
	// prettier-ignore
	const LeftBG = `M 0, 0 L ${vw / 2 + vw / 10 + 1}, 0  ${vw / 2 - vw / 10 + 1}, ${vh} 0, ${vh}`;
	// prettier-ignore
	const RightBG = `M ${vw},0 L ${vw},${vh} ${vw / 2 - vw / 10 - 1 }, ${vh} ${vw / 2 + vw / 10 - 1 },0`;

	return (
		<LoadingDIV isLoading={loadState}>
			<Svg height={vh} width={vw} zIndex={10}>
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
			</Svg>

			<Svg height={vh} width={vw} zIndex={9}>
				<MovingPath d={LeftBG} fill='#D9D8D7' sNum={1.8} direction='Left' />
				<MovingPath d={RightBG} fill='#F2E7C4' sNum={1.8} direction='Right' />
				<MovingPath d={LeftBG} fill='#D99E91' sNum={1.6} direction='Left' />
				<MovingPath d={RightBG} fill='#3F733D' sNum={1.6} direction='Right' />
				<MovingPath d={LeftBG} fill='#A64B4B' sNum={1.4} direction='Left' />
				<MovingPath d={RightBG} fill='#30592E' sNum={1.4} direction='Right' />
				<MovingPath d={LeftBG} fill='#D91A1A' sNum={1.2} direction='Left' />
				<MovingPath d={RightBG} fill='#0D2611' sNum={1.2} direction='Right' />
				<MovingPath d={LeftBG} fill='#000000' sNum={1} direction='Left' />
				<MovingPath d={RightBG} fill='#000000' sNum={1} direction='Right' />
			</Svg>
		</LoadingDIV>
	);
}

const LoadingDIV = styled.div<{ isLoading: boolean }>`
	position: fixed;
	width: 100vw;
	height: 100vh;
	top: 0;
	left: 0;
	opacity: 1;
	z-index: 10;
	transition: opacity 0.5s ease-in-out;
	${(props) =>
		props.isLoading === false
			? css`
					display: none;
			  `
			: null};
`;

const strokeAnimation = keyframes`
	0% {
	} 100% {
		stroke-dashoffset: 50vw;
		stroke-dasharray: 50vw;
	}
`;

const moveLeft = keyframes`
	to{transform:translateX(-100vw);}
`;

const moveRight = keyframes`
	to{transform:translateX(100vw);}
`;

const Svg = styled.svg<{ zIndex: number }>`
	position: fixed;
	top: 0;
	left: 0;
	z-index: ${(props) => props.zIndex};
`;

const MovingPath = styled.path<{ direction: string; sNum: number }>`
	${(props) =>
		props.direction === 'Right'
			? css`
					animation: ${moveRight} 0.7s ${props.sNum * 0.8 + 's'} ease-in-out
						forwards;
			  `
			: css`
					animation: ${moveLeft} 0.7s ${props.sNum * 0.8 + 's'} ease-in-out
						forwards;
			  `}
`;

const Line = styled.path`
	stroke-dasharray: 50vw;
	stroke-dashoffset: 150vw;
`;

const FirstPath = styled(Line)`
	animation: ${strokeAnimation} 1s cubic-bezier(0.785, 0.135, 0.15, 0.86)
		forwards;
`;

const SecondPath = styled(Line)`
	stroke-dasharray: 50vw;
	stroke-dashoffset: 150vw;
	animation: ${strokeAnimation} 1.5s 0.5s cubic-bezier(0.33, 1, 0.68, 1)
		forwards;
`;
export default Loading;
