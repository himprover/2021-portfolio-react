import styled from 'styled-components';

function One() {
	return (
		<>
			<Title>가나다라마바사 아자차 페이지</Title>
			<RefImg src='https://fakeimg.pl/300/ff0000/' />
			<RefComment>
				안녕하세요. 이건 소개 멘트입니다. 소개 멘트는 이러쿵 저러쿵 어쩌구
				저쩌구
			</RefComment>
			<UseSkill>UseSkill</UseSkill>
		</>
	);
}

const Title = styled.h1`
	position: absolute;
	z-index: 1;
	padding-top: 1%;
	padding-bottom: 1%;
	padding-left: 1%;
	margin: 0;
	top: 0;
	left: 0;
	width: 50%;
	background: #0000008d;
	backdrop-filter: blur(2px);
	filter: drop-shadow(0px 0px 10px #0000008d);
`;

const RefImg = styled.img`
	position: absolute;
	width: 100%;
	height: 100%;
	border-radius: 1%;
`;
const RefComment = styled.h2`
	font-size: 3rem;
	z-index: 1;
	&:hover ${RefImg} {
		width: 50%;
		font-size: 10rem;
	}
`;
const UseSkill = styled.div`
	position: absolute;
	z-index: 1;
	bottom: 0;
	right: 0;
`;

export default One;
