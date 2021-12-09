import styled, { css } from 'styled-components';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'modules';
import { increase, decrease } from 'modules/counter';

import Main from './Contents/Main';
import Skills from './Contents/Skills';
import Reference from './Contents/Reference';
import AboutMe from './Contents/AboutMe';
import Contact from './Contents/Contact';

import { throttle } from 'lodash';

import { useEffect, useState, useRef, useMemo } from 'react';

function Content() {
	const contentRef = useRef<HTMLDivElement>(null);
	const mainRef = useRef<HTMLDivElement>(null);
	const skillsRef = useRef<HTMLDivElement>(null);
	const referenceRef = useRef<HTMLDivElement>(null);
	const aboutmeRef = useRef<HTMLDivElement>(null);
	const contactRef = useRef<HTMLDivElement>(null);

	const count = useSelector((state: RootState) => state.counter.count);
	const dispatch = useDispatch();

	const onIncrease = () => {
		dispatch(increase());
	};

	const onDecrease = () => {
		dispatch(decrease());
	};

	const section = useRef<number>(0);
	const lastTimestamp = useRef<number>(Date.now());

	const [sectionState, setSection] = useState<number>(0);

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
				//if (+lastTimestamp.current - e.timeStamp > 1000) {
				if (doubleChk(1010)) {
					if (e.deltaY < 0) {
						if (count > 0) {
							onDecrease();
							//setSection((current) => current - 1);
						}
					} else {
						if (count < 4) {
							onIncrease();
							//setSection((current) => current + 1);
						}
					}
				}
			}, 300),
		[count]
	);

	useEffect(() => {
		window.addEventListener('wheel', scrollHandler);
		return () => {
			window.removeEventListener('wheel', scrollHandler);
		};
	}, [scrollHandler]);

	return (
		<ContentDIV ref={contentRef} nowSection={count}>
			<Main ref={mainRef} />
			<Skills ref={skillsRef} />
			<Reference ref={referenceRef} />
			<AboutMe ref={aboutmeRef} />
			<Contact ref={contactRef} />
		</ContentDIV>
	);
}

const ContentDIV = styled.div<{ nowSection: number }>`
	overflow: visible;
	position: fixed;
	height: 100vh;
	top: 0;
	transition: all 950ms ease 0s;
	${(props) =>
		css`
			transform: translateY(${-100 * props.nowSection + 'vh'});
		`};
	& > div {
		height: 100vh;
		position: relative;
	}
`;

export default Content;
