import styled from 'styled-components';
import { forwardRef } from 'react';

const Skills = forwardRef<any>((props, ref) => {
	return <SkillsDIV ref={ref}></SkillsDIV>;
});

const SkillsDIV = styled.div``;

export default Skills;
