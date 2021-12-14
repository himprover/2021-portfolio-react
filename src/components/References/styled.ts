import styled from 'styled-components';

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
	background: #00000092;
	backdrop-filter: blur(5px);
	filter: drop-shadow(0px 0px 10px #0000008d);
`;

export const RefImg = styled.img`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 105%;
	height: 105%;
	filter: blur(2px) brightness(90%);
`;
export const RefComment = styled.h3`
	position: absolute;
	font-size: 3rem;
	font-weight: 400;
	width: 90%;
	z-index: 1;
	top: 68%;
	margin: 0;
	padding: 1rem;
	right: 50%;
	transform: translateX(50%);
	background: #00000045;
	backdrop-filter: blur(5px);
	filter: drop-shadow(5px 5px 2px #000000a7);
`;
export const UseSkill = styled.div`
	position: absolute;
	z-index: 1;
	bottom: 1rem;
	right: 1rem;
	width: 30%;
	height: 5%;
	border-radius: 1000px;
	background: #ffffff88;
	backdrop-filter: blur(5px);
	filter: drop-shadow(5px 5px 2px #000000a7);
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

	&.nowShow {
		display: none;
	}
`;
