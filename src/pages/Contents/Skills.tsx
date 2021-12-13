import styled, { keyframes, css } from 'styled-components';
import { forwardRef } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'modules';

import { ReactComponent as HTML5SVG } from '../../imgs/skills/svg/HTML5.svg';
import { ReactComponent as ES6SVG } from '../../imgs/skills/svg/ES6.svg';
import { ReactComponent as REACTSVG } from '../../imgs/skills/svg/REACT.svg';
import { ReactComponent as TSSVG } from '../../imgs/skills/svg/TS.svg';
import { ReactComponent as NESTSVG } from '../../imgs/skills/svg/NEST.svg';
import { ReactComponent as NODESVG } from '../../imgs/skills/svg/NODE.svg';
import { ReactComponent as PHPSVG } from '../../imgs/skills/svg/PHP.svg';

const Skills = forwardRef<any>((props, ref) => {
	const count = useSelector((state: RootState) => state.counter.count);
	return (
		<SkillsDIV ref={ref}>
			<Title>Skills</Title>
			<Logo1DIV nowsection={count}>
				<HTML5 />
				<ES6 />
				<REACT />
				<TS />
			</Logo1DIV>
			<Logo2DIV nowsection={count}>
				<NEST />
				<NODE />
				<PHP />
			</Logo2DIV>
		</SkillsDIV>
	);
});

const rightMove = keyframes`
	from {
		transform:translateX(-100vw);
	} to {
		transform:translateX(0);
	}
`;
const rightMoveUndo = keyframes`
	from {
		transform:translateX(0);
	} to {
		transform:translateX(-100vw);
	}
`;
const leftMove = keyframes`
	from {
		transform:translateX(100vw);
	} to {
		transform:translateX(0);
	}
`;
const leftMoveUndo = keyframes`
	from {
		transform:translateX(0);
	} to {
		transform:translateX(100vw);
	}
`;

const SkillsDIV = styled.div`
	background: ${({ theme }: { theme: any }) => theme.skillsBgColor};
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	overflow: hidden;

	svg {
		cursor: pointer;
		polygon,
		rect {
			transition: all 0.2s ease-in-out;
		}
		&:hover {
			polygon,
			rect {
				fill: #ffffff;
			}
		}
	}
`;

const Logo1DIV = styled.div<{ nowsection: number }>`
	display: flex;
	justify-content: space-between;
	width: 170rem;
	margin: 0 auto;
	z-index: 2;
	${(props) =>
		props.nowsection === 1
			? css`
					animation: ${rightMove} 1s forwards;
			  `
			: css`
					animation: ${rightMoveUndo} 1s forwards;
			  `}
	polygon {
		fill: #64646465;
		stroke: #ffffff;
	}
`;
const Logo2DIV = styled.div<{ nowsection: number }>`
	display: flex;
	justify-content: space-between;
	width: 110rem;
	margin: 0 auto;
	z-index: 2;
	${(props) =>
		props.nowsection === 1
			? css`
					animation: ${leftMove} 1s forwards;
			  `
			: css`
					animation: ${leftMoveUndo} 1s forwards;
			  `}
	rect {
		fill: #ffffff64;
		stroke: #ffffff;
	}
`;

const Title = styled.h1`
	font-size: 6rem;
	font-weight: 400;
	position: absolute;
	margin: 0;
	left: 3rem;
	top: 3rem;
`;

const HTML5 = styled(HTML5SVG)`
	width: 30rem;
	transform: rotate(15deg);
	filter: drop-shadow(42px 46px 0px rgba(0, 0, 0, 0.25));

	z-index: 2;
	overflow: hidden;

	img {
		z-index: 2;
	}
`;

const ES6 = styled(ES6SVG)`
	width: 30rem;
	transform: rotate(15deg);
	filter: drop-shadow(42px 46px 0px rgba(0, 0, 0, 0.25));
	z-index: 2;

	img {
		z-index: 2;
	}
`;

const REACT = styled(REACTSVG)`
	width: 30rem;
	transform: rotate(15deg);
	filter: drop-shadow(42px 46px 0px rgba(0, 0, 0, 0.25));
	z-index: 2;
	img {
		z-index: 2;
	}
`;

const TS = styled(TSSVG)`
	width: 30rem;
	transform: rotate(15deg);
	filter: drop-shadow(42px 46px 0px rgba(0, 0, 0, 0.25));
	z-index: 2;
	img {
		z-index: 2;
	}
`;

const NEST = styled(NESTSVG)`
	width: 20rem;
	transform: rotate(15deg);
	filter: drop-shadow(42px 46px 0px rgba(0, 0, 0, 0.25));
	z-index: 2;
	img {
		z-index: 2;
	}
`;

const NODE = styled(NODESVG)`
	width: 20rem;
	transform: rotate(15deg);
	filter: drop-shadow(42px 46px 0px rgba(0, 0, 0, 0.25));
	z-index: 2;
	img {
		z-index: 2;
	}
`;

const PHP = styled(PHPSVG)`
	width: 20rem;
	transform: rotate(15deg);
	filter: drop-shadow(42px 46px 0px rgba(0, 0, 0, 0.25));
	z-index: 2;
	img {
		z-index: 2;
	}
`;

export default Skills;
