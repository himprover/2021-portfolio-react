import styled, { keyframes, css } from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from 'modules';
import { defaultLaptop } from 'styles/themes';

import { ReactComponent as HTML5SVG } from '../../imgs/skills/svg/HTML5.svg';
import { ReactComponent as ES6SVG } from '../../imgs/skills/svg/ES6.svg';
import { ReactComponent as REACTSVG } from '../../imgs/skills/svg/REACT.svg';
import { ReactComponent as TSSVG } from '../../imgs/skills/svg/TS.svg';
import { ReactComponent as NESTSVG } from '../../imgs/skills/svg/NEST.svg';
import { ReactComponent as NODESVG } from '../../imgs/skills/svg/NODE.svg';
import { ReactComponent as PHPSVG } from '../../imgs/skills/svg/PHP.svg';

function Skills() {
	const nowsection = useSelector(
		(state: RootState) => state.sectionHandle.nowsection
	);
	return (
		<SkillsDIV>
			<Title>Skills</Title>
			<Logo1DIV nowsection={nowsection}>
				<LogoMentDIV>
					<HTML5 />
					<Ment>HTML5 적용 개발이 가능합니다</Ment>
				</LogoMentDIV>
				<LogoMentDIV>
					<ES6 />
					<Ment>ES6문법 적용 개발이 가능합니다</Ment>
				</LogoMentDIV>
				<LogoMentDIV>
					<REACT />
					<Ment>
						React Functional Component w/Hooks
						<br />
						개발이 가능합니다
					</Ment>
				</LogoMentDIV>
				<LogoMentDIV>
					<TS />
					<Ment>Typescript 적용 개발이 가능합니다</Ment>
				</LogoMentDIV>
			</Logo1DIV>
			<Logo2DIV nowsection={nowsection}>
				<LogoMentDIV>
					<NEST />
					<Ment isBottom={true}>
						NestJS 적용 REST API서버 개발이 가능합니다
					</Ment>
				</LogoMentDIV>
				<LogoMentDIV>
					<NODE />
					<Ment isBottom={true}>NodeJS 적용 Backend 개발이 가능합니다</Ment>
				</LogoMentDIV>
				<LogoMentDIV>
					<PHP />
					<Ment isBottom={true}>php 적용 Backend 개발이 가능합니다</Ment>
				</LogoMentDIV>
			</Logo2DIV>
		</SkillsDIV>
	);
}

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
	background: ${({ theme }: { theme: any }) =>
		theme.skillsBgColor ? theme.skillsBgColor : null};
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	overflow: hidden;
	position: relative;
	@media only screen and (max-width: 680px) {
		flex-direction: row;
		align-items: center;
	}
`;

const Logo1DIV = styled.div<{ nowsection: number }>`
	display: flex;
	flex-direction:row;
	flex-flow:row wrap;
	justify-content: space-between;
	width: 90%;
	margin: 0 auto;
	z-index: 2;
	@media only screen and (max-width: 1250px) {
		&{
			width:60%;
		}
	}
	@media only screen and (max-width: 680px) {
		&{
			width:40%;
			height: 90%;
			flex-direction:column;
		}
	}
	${(props) =>
		props.nowsection === 1
			? css`
					animation: ${rightMove} 1s forwards;
			  `
			: css`
					animation: ${rightMoveUndo} 1s forwards;
			  `}
	polygon {
		fill: ${({ theme }: { theme: any }) => theme.skillsPentagonBgColor};
		stroke: ${({ theme }: { theme: any }) => theme.skillsStorkeColor};
`;
const Logo2DIV = styled.div<{ nowsection: number }>`
	display: flex;
	justify-content: space-between;
	width: 60%;
	margin: 0 auto;
	z-index: 2;
	@media only screen and (max-width: 1250px) {
		& {
		}
	}
	@media only screen and (max-width: 680px) {
		& {
			flex-direction: column;
			width: 40%;
			height: 80%;
		}
	}
	${(props) =>
		props.nowsection === 1
			? css`
					animation: ${leftMove} 1s forwards;
			  `
			: css`
					animation: ${leftMoveUndo} 1s forwards;
			  `}
	rect {
		fill: ${({ theme }: { theme: any }) => theme.skillsSquareBgColor};
		stroke: ${({ theme }: { theme: any }) => theme.skillsStorkeColor};
	}
`;

const LogoMentDIV = styled.div`
	transform: rotate(15deg);
	position: relative;
	cursor: pointer;
	polygon,
	rect,
	h2 {
		transition: all 0.2s ease-in-out;
	}
	&:hover {
		polygon,
		rect {
			fill: #ffffff;
		}
		h2 {
			opacity: 1;
		}
	}
`;

const Ment = styled.h2<{ isBottom?: boolean }>`
	opacity: 0;
	width: 100%;
	position: absolute;
	top: 50%;
	left: 50%;
	font-size: 2rem;
	${(props) =>
		props.isBottom
			? css`
					transform: translate(-50%, -70%);
			  `
			: css`
					transform: translate(-50%, -50%);
			  `}
	background: #000000be;
	text-align: center;
	padding-top: 5%;
	padding-bottom: 5%;
	color: ${({ theme }: { theme: any }) => theme.skillsFontColor};
`;

const Title = styled.h1`
	font-size: 6rem;
	font-weight: 400;
	position: absolute;
	margin: 0;
	left: 3rem;
	top: 3rem;
	z-index: 5;
	color: ${({ theme }: { theme: any }) => theme.titleFontColor};
`;

const HTML5 = styled(HTML5SVG)`
	margin: 0 auto;
	display: block;
	width: 30rem;
	filter: drop-shadow(42px 46px 0px rgba(0, 0, 0, 0.25));
	z-index: 2;
	img {
		z-index: 2;
	}
`;

const ES6 = styled(ES6SVG)`
	margin: 0 auto;
	display: block;
	width: 30rem;
	filter: drop-shadow(42px 46px 0px rgba(0, 0, 0, 0.25));
	z-index: 2;
	img {
		z-index: 2;
	}
`;

const REACT = styled(REACTSVG)`
	margin: 0 auto;
	display: block;
	width: 30rem;
	filter: drop-shadow(42px 46px 0px rgba(0, 0, 0, 0.25));
	z-index: 2;
	img {
		z-index: 2;
	}
`;

const TS = styled(TSSVG)`
	margin: 0 auto;
	display: block;
	width: 30rem;
	filter: drop-shadow(42px 46px 0px rgba(0, 0, 0, 0.25));
	z-index: 2;
	img {
		z-index: 2;
	}
`;

const NEST = styled(NESTSVG)`
	margin: 0 auto;
	display: block;
	width: 20rem;
	filter: drop-shadow(42px 46px 0px rgba(0, 0, 0, 0.25));
	z-index: 2;
	img {
		z-index: 2;
	}
`;

const NODE = styled(NODESVG)`
	margin: 0 auto;
	display: block;
	width: 20rem;
	filter: drop-shadow(42px 46px 0px rgba(0, 0, 0, 0.25));
	z-index: 2;
	img {
		z-index: 2;
	}
`;

const PHP = styled(PHPSVG)`
	margin: 0 auto;
	display: block;
	width: 20rem;
	filter: drop-shadow(42px 46px 0px rgba(0, 0, 0, 0.25));
	z-index: 2;
	img {
		z-index: 2;
	}
`;

export default Skills;
