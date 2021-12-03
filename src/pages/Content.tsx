import styled from 'styled-components';
import Main from './Contents/Main';
import Skills from './Contents/Skills';
import Reference from './Contents/Reference';
import Hobby from './Contents/Hobby';
import Contact from './Contents/Contact';

import { useEffect, useState, useRef, useMemo } from 'react';
import { throttle } from 'lodash';

function Content() {
	const contentRef = useRef<HTMLDivElement>(null);
	const mainRef = useRef<HTMLDivElement>(null);
	const skillsRef = useRef<HTMLDivElement>(null);
	const referenceRef = useRef<HTMLDivElement>(null);
	const hobbyRef = useRef<HTMLDivElement>(null);
	const contactRef = useRef<HTMLDivElement>(null);

	//const [section, setSection] = useState<number>(0);

	const section = useRef<number>(0);

	const onScroll = throttle((e: React.UIEvent<HTMLDivElement>) => {
		if (e.currentTarget !== null) {
			let yArray = [
				mainRef.current!.offsetTop,
				skillsRef.current!.offsetTop,
				referenceRef.current!.offsetTop,
				hobbyRef.current!.offsetTop,
				contactRef.current!.offsetTop,
			];
			let scrollY = e.currentTarget.scrollTop;
			console.log(yArray[section.current] as number);
			console.log(scrollY);
			let deltaY = (yArray[section.current] as number) - scrollY;
			console.log('스크롤 이벤트');
			if (deltaY < 0) {
				console.log('내림');
				if (section.current < 4) {
					section.current++;
					return contentRef.current!.scrollTo({
						top: yArray[section.current],
						behavior: 'smooth',
					});
				}
			} else {
				console.log('올림');
				if (section.current > 0) {
					section.current--;
					return contentRef.current!.scrollTo({
						top: yArray[section.current],
						behavior: 'smooth',
					});
				}
			}
		}
	}, 290);

	// useEffect(() => {
	// 	window.addEventListener('scroll', () => {});
	// 	return () => {
	// 		window.removeEventListener('scroll', () => {});
	// 	};
	// }, []);

	return (
		<ContentDIV ref={contentRef} onScroll={onScroll}>
			<Main ref={mainRef} />
			<Skills ref={skillsRef} />
			<Reference ref={referenceRef} />
			<Hobby ref={hobbyRef} />
			<Contact ref={contactRef} />
		</ContentDIV>
	);
}

const ContentDIV = styled.div`
	overflow-y: scroll;
	height: 100vh;
	& > div {
		height: 100vh;
		position: relative;
	}
`;

export default Content;
