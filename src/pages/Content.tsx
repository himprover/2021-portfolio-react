import styled from 'styled-components';
import Main from './Contents/Main';
import Skills from './Contents/Skills';
import Reference from './Contents/Reference';
import Hobby from './Contents/Hobby';
import Contact from './Contents/Contact';
import { useEffect, useState, useRef } from 'react';

function Content() {
	const mainRef = useRef<HTMLDivElement>(null);
	const skillsRef = useRef<HTMLDivElement>(null);
	const referenceRef = useRef<HTMLDivElement>(null);
	const hobbyRef = useRef<HTMLDivElement>(null);
	const contactRef = useRef<HTMLDivElement>(null);

	const [scrollY, setScrollY] = useState<number>(0);
	const [section, setSection] = useState<number>(0);

	const scrollHandler = (e: React.UIEvent<HTMLDivElement>) => {
		let deltaY = scrollY - e.currentTarget.scrollTop;
		if (deltaY < 0) {
			console.log('내림');
			if (section < 4) {
				setSection((current) => current + 1);
			}
			console.log(section);
		} else {
			console.log('올림');
			if (section > 0) {
				setSection((current) => current - 1);
			}
			console.log(section);
		}
		setScrollY(e.currentTarget.scrollTop);
	};

	// const scrollHandler = (e: React.UIEvent<HTMLDivElement>) => {
	// 	console.log(e.target);
	// };

	return (
		<ContentDIV onScroll={scrollHandler}>
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
	div {
		height: 100vh;
		border: 1px solid black;
	}
`;

export default Content;
