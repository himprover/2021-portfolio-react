import styled from 'styled-components';
import { forwardRef } from 'react';

import { ReactComponent as HTML5SVG } from '../../imgs/skills/svg/HTML5.svg';

const Skills = forwardRef<any>((props, ref) => {
	return (
		<SkillsDIV ref={ref}>
			<Title>Skills</Title>
			<HTML5 />
		</SkillsDIV>
	);
});

const SkillsDIV = styled.div`
	background: ${({ theme }: { theme: any }) => theme.skillsBgColor};
	overflow: hidden;
`;

const Title = styled.h1`
	font-size: 6rem;
	font-weight: 400;
	position: absolute;
	margin: 0;
	padding-left: 3rem;
	padding-top: 3rem;
	top: 0;
`;

const HTML5 = styled(HTML5SVG)`
	position: absolute;
`;

export default Skills;
