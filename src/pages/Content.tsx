import styled, { css } from 'styled-components';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'modules';
import { increase, decrease } from 'modules/sectionHandle';

import Main from './Contents/Main';
import Skills from './Contents/Skills';
import Reference from './Contents/Reference';
import AboutMe from './Contents/AboutMe';
import Contact from './Contents/Contact';

import { throttle } from 'lodash';

import { useEffect, useRef, useMemo } from 'react';

function Content() {
	const nowsection = useSelector(
		(state: RootState) => state.sectionHandle.nowsection
	); // nowsection load
	const dispatch = useDispatch(); // use dispatch

	const onIncrease = () => {
		dispatch(increase());
	};

	const onDecrease = () => {
		dispatch(decrease());
	};

	const lastTimestamp = useRef<number>(Date.now());

	// scrollTimeChk
	const doubleChk = (time: number) => {
		const nowDate = Date.now();
		if (nowDate - lastTimestamp.current > time) {
			lastTimestamp.current = nowDate;
			console.log(nowDate - lastTimestamp.current);
			return true;
		} else {
			console.log(nowDate - lastTimestamp.current);
			return false;
		}
	};

	const scrollHandler = useMemo(
		() =>
			throttle((e) => {
				if (doubleChk(1010)) {
					if (e.deltaY < 0) {
						if (nowsection > 0) {
							onDecrease();
						}
					} else {
						if (nowsection < 4) {
							onIncrease();
						}
					}
				}
			}, 300),
		[nowsection]
	);

	useEffect(() => {
		window.addEventListener('wheel', scrollHandler);
		return () => {
			window.removeEventListener('wheel', scrollHandler);
		};
	}, [scrollHandler]);

	return (
		<ContentDIV nowSection={nowsection}>
			<Main />
			<Skills />
			<Reference />
			<AboutMe />
			<Contact />
		</ContentDIV>
	);
}

const ContentDIV = styled.div<{ nowSection: number }>`
	overflow: visible;
	height: 100vh;
	top: 0;
	transition: all 950ms ease 0s;
	${(props) =>
		props.nowSection < 2
			? css`
					transform: translateY(${-100 * props.nowSection + 'vh'});
			  `
			: props.nowSection === 2
			? css`
					transform: translateY(${-100 * 1 + 'vh'});
			  `
			: props.nowSection > 2
			? css`
					transform: translateY(${-100 * (props.nowSection - 1) + 'vh'});
			  `
			: null};
	& > div {
		height: 100vh;
		position: relative;
	}
`;

export default Content;
