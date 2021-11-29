import styled from 'styled-components';
import Main from './Contents/Main';
import Skills from './Contents/Skills';
import Reference from './Contents/Reference';
import Hobby from './Contents/Hobby';
import Contact from './Contents/Contact';
import { useRef } from 'react';

function Content() {
	const mainRef = useRef<HTMLDivElement>(null);
	const skillsRef = useRef<HTMLDivElement>(null);
	const skillsHandler = () => {
		skillsRef.current?.scrollIntoView({ behavior: 'smooth' });
	};
	return (
		<ContentDIV>
			<Main ref={mainRef} />
			<Skills ref={skillsRef} />
			<Reference />
			<Hobby />
			<Contact />
			<button onClick={skillsHandler}></button>
		</ContentDIV>
	);
}

const ContentDIV = styled.div`
	overflow-y: scroll;
	div {
		height: 100vh;
		border: 1px solid black;
	}
`;

export default Content;
