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

	const [scrollY, setScrollY] = useState<number>(0);
	const [section, setSection] = useState<number>(0);

	const throttleScrollHandler = useMemo(
		() =>
			throttle(() => {
				const pageYOffset: number = contentRef.current?.scrollTop as number;
				let deltaY = scrollY - pageYOffset;
				if (deltaY < 0) {
					console.log('내림');
					if (section < 4) {
						setSection((current) => current + 1);
					}
				} else {
					console.log('올림');
					if (section > 0) {
						setSection((current) => current - 1);
					}
				}
				console.log(section);
				setScrollY(pageYOffset);
				console.log('page ' + pageYOffset);
				console.log('scroll ' + scrollY);
			}, 5000),
		[]
	);

	useEffect(() => {
		contentRef.current?.addEventListener('scroll', throttleScrollHandler);
		return () =>
			contentRef.current?.removeEventListener('scroll', throttleScrollHandler);
	}, [throttleScrollHandler]);

	return (
		<ContentDIV ref={contentRef}>
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
