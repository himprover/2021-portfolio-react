import styled from 'styled-components';
import { forwardRef } from 'react';

const Skills = forwardRef<any>((props, ref) => {
	return <SkillsDIV ref={ref}></SkillsDIV>;
});

const SkillsDIV = styled.div`
	background: ${({ theme }: { theme: any }) => theme.skillsBgColor};
	overflow: hidden;
`;

export default Skills;
