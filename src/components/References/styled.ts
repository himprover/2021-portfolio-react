import styled, { keyframes } from 'styled-components';

const SkillShow = keyframes`
	from{
		opacity:0;
	} to {
		opacity:1;
	}
`;

export const Title = styled.h2`
	position: absolute;
	z-index: 1;
	padding-top: 1%;
	padding-bottom: 1%;
	padding-left: 1%;
	margin: 0;
	top: 0;
	left: 0;
	width: 50%;
	font-size: 2.5rem;
	font-weight: 400;
	background: #00000022;
	backdrop-filter: blur(5px);
	border: 1px solid #ffffff30;
	filter: drop-shadow(0px 0px 10px #0000008d);
`;

export const RefImg = styled.img`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 105%;
	height: 105%;
	filter: blur(1px) brightness(90%);
	object-fit: cover;
`;
export const RefComment = styled.h3`
	word-break: keep-all;
	position: absolute;
	font-size: 2.5rem;
	line-height: 3.5rem;
	font-weight: 200;
	width: 90%;
	z-index: 1;
	top: 60%;
	margin: 0;
	padding: 1rem;
	right: 50%;
	transform: translateX(50%);
	background: #00000045;
	border: 1px solid #ffffff30;
	backdrop-filter: blur(5px);
	filter: drop-shadow(5px 5px 2px #000000a7);
`;
export const UseSkill = styled.div`
	position: absolute;
	z-index: 1;
	bottom: 1rem;
	right: 1rem;
	width: 30%;
	height: 8%;
	border-radius: 1000px;
	background: #ffffff88;
	backdrop-filter: blur(5px);
	filter: drop-shadow(5px 5px 2px #000000a7);
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	padding-left: 5%;
	padding-right: 5%;
`;
export const List = styled.div`
	position: absolute;
	display: flex;
	justify-content: space-around;
	left: 0;
	top: 0;
	width: 100%;
	height: 70vh;
	margin: 0 auto;
	overflow: hidden;

	& > div:last-child {
		opacity: 0;
		animation: ${SkillShow} 0.5s 1s ease forwards;
	}

	&.notShow {
		display: none;
	}
`;

export const RedText = styled.span`
	color: red;
	box-shadow: inset 0 0px 0 white, inset 0 -1px 0 red;
`;
