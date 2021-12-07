import styled from 'styled-components';
import { forwardRef } from 'react';

import HobbyPng1 from 'imgs/hobby/png/hobby1.png';
import HobbyPng2 from 'imgs/hobby/png/hobby2.png';
const AboutMe = forwardRef<any>((props, ref) => {
	return (
		<AboutMeDIV ref={ref}>
			<ImgArea>
				<Title>About Me</Title>
				<HobbyImg1 src={HobbyPng1} />
				<HobbyImg2 src={HobbyPng2} />
			</ImgArea>
			<MentArea>
				<MentTitle>궁금한 게 너무 많습니다.</MentTitle>
				<MentSub>
					'목에 담이 걸리면 아픈 원리는 뭘까?' 라는 사소한 일상적인 상황도
					<br />
					궁금한 것은 찾아보고 알아보는 성격입니다.
				</MentSub>
				<MentSub>알아가는 행위를 즐기며, 그 만큼 노는 것도 좋아합니다.</MentSub>
				<MentSub>게으른 성격으로, 최고의 효율을 좋아합니다.</MentSub>
				<MentSub>여행·사진, 운전이 취미며 수영을 좋아합니다.</MentSub>
			</MentArea>
		</AboutMeDIV>
	);
});

const AboutMeDIV = styled.div`
	background: radial-gradient(
		82.47% 260.66% at 16.85% 50%,
		#474747 0%,
		#2e2e2e 20.83%,
		#212121 100%
	);
	display: flex;
	align-items: center;
`;

const ImgArea = styled.div`
	display: flex;
	width: 40%;
`;
const MentArea = styled.div`
	display: flex;
	flex-direction: column;
	width: 60%;
`;

const Title = styled.h1`
	font-size: 6rem;
	font-weight: 400;
	position: absolute;
	margin: 0;
	left: 3rem;
	top: 3rem;
`;

const HobbyImg1 = styled.img`
	position: absolute;
	left: 10rem;
	top: 50%;
	transform: translateY(-50%);
	width: 60rem;
	z-index: 1;
	filter: drop-shadow(5px 5px 5px #00000070);
`;

const HobbyImg2 = styled.img`
	position: absolute;
	left: 18rem;
	top: 50%;
	transform: translateY(-40.5%);
	width: 55rem;
	z-index: 0;
	filter: drop-shadow(5px 5px 5px #00000070);
`;

const MentTitle = styled.h2`
	font-size: 5.5rem;
	font-weight: 500;
`;

const MentSub = styled.h3`
	font-size: 3rem;
	font-weight: 300;
`;

export default AboutMe;
