import styled, { css } from 'styled-components';
import Main from './Contents/Main';
import Skills from './Contents/Skills';
import Reference from './Contents/Reference';
import Hobby from './Contents/Hobby';
import Contact from './Contents/Contact';

import { throttle } from 'lodash';

import { useEffect, useState, useRef, useMemo, useCallback } from 'react';

function Content() {
	const contentRef = useRef<HTMLDivElement>(null);
	const mainRef = useRef<HTMLDivElement>(null);
	const skillsRef = useRef<HTMLDivElement>(null);
	const referenceRef = useRef<HTMLDivElement>(null);
	const hobbyRef = useRef<HTMLDivElement>(null);
	const contactRef = useRef<HTMLDivElement>(null);

	const section = useRef<number>(0);

	const [sectionState, setSection] = useState<number>(0);

	const scrollHandler = useMemo(
		() =>
			throttle((e) => {
				if (e.deltaY < 0) {
					if (section.current > 0) {
						console.log('??');
						setSection((current) => current - 1);
						section.current--;
					}
				} else {
					if (section.current < 4) {
						console.log('??');
						setSection((current) => current + 1);
						section.current++;
					}
				}
			}, 1000),
		[section]
	);

	useEffect(() => {
		window.addEventListener('wheel', scrollHandler);
		return () => {
			window.removeEventListener('wheel', scrollHandler);
		};
	}, [scrollHandler]);

	// return () => {
	// 	window.removeEventListener('wheel', (e) => {
	// 		if (e.deltaY < 0) {
	// 			if (section > 0) {
	// 				setSection((current) => current - 1);
	// 			}
	// 		} else {
	// 			if (section < 4) {
	// 				setSection((current) => current + 1);
	// 			}
	// 		}
	// 	});
	// };

	return (
		<ContentDIV ref={contentRef} nowSection={sectionState}>
			<Main ref={mainRef} />
			<Skills ref={skillsRef} />
			<Reference ref={referenceRef} />
			<Hobby ref={hobbyRef} />
			<Contact ref={contactRef} />
		</ContentDIV>
	);
}

const ContentDIV = styled.div<{ nowSection: number }>`
	overflow: visible;
	position: fixed;
	height: 100vh;
	top: 0;
	transition: all 1000ms ease 0s;
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
