import styled from 'styled-components';
import Main from './Contents/Main';
import Skills from './Contents/Skills';
import Reference from './Contents/Reference';
import Hobby from './Contents/Hobby';
import Contact from './Contents/Contact';
import { useEffect, useState, useRef } from 'react';

const throttle = function (callback: any, waitTime: any) {
	let timerId: any = null;
	return (e: any) => {
		if (timerId) return;
		timerId = setTimeout(() => {
			timerId = null;
		}, waitTime);
	};
};

function Content() {
	const mainRef = useRef<HTMLDivElement>(null);
	const skillsRef = useRef<HTMLDivElement>(null);

	return (
		<ContentDIV>
			<Main ref={mainRef} />
			<Skills ref={skillsRef} />
			<Reference />
			<Hobby />
			<Contact />
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
