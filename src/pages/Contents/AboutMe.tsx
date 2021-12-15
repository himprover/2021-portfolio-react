import styled, { css, keyframes } from 'styled-components';

import HobbyPng1 from 'imgs/hobby/png/hobby1.png';
import HobbyPng2 from 'imgs/hobby/png/hobby2.png';

import { useSelector } from 'react-redux';
import { RootState } from 'modules';
function AboutMe() {
	const nowsection = useSelector(
		(state: RootState) => state.sectionHandle.nowsection
	);
	return (
		<AboutMeDIV>
			<Title>About Me</Title>
			<ImgArea>
				<FlashEffect nowsection={nowsection} />
				<HobbyImg1 src={HobbyPng1} nowsection={nowsection} />
				<HobbyImg2 src={HobbyPng2} nowsection={nowsection} />
			</ImgArea>
			<MentArea nowsection={nowsection}>
				<MentTitle>궁금한 게 너무 많습니다.</MentTitle>
				<MentSub>
					'목에 담이 걸리면 아픈 원리는 뭘까?' 라는 사소한 일상적인 상황도
					<br />
					궁금한 것은 <b>찾아보고 알아보는 성격</b>입니다.
				</MentSub>
				<MentSub>
					좋아하는 사람들과 <b>이야기</b>하는 것을 좋아합니다.
				</MentSub>
				<MentSub>
					알아가는 행위를 즐기며, 그 만큼 <b>노는 것</b>도 좋아합니다.
				</MentSub>
				<MentSub>
					<b>게으른 성격</b>으로, <b>최고의 효율</b>을 좋아합니다.
				</MentSub>
				<MentSub>여행·사진, 운전이 취미며 수영을 좋아합니다.</MentSub>
				<br />
				<Info>병역사항 : 현역(1급) 산업기능요원 복무중 (훈련소 수료)</Info>
				<Info>
					학력사항 : 숭실대학교 소프트웨어학부 휴학 / 학점은행제 학사 준비중
				</Info>
			</MentArea>
		</AboutMeDIV>
	);
}

const AboutMeDIV = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: space-around;
`;

const ImgArea = styled.div`
	display: flex;
	width: 40%;
`;

const imgkeyback = keyframes`
	from {opacity:1;}
	to{opacity:0}
`;

const imgkey2 = keyframes`
	from {opacity:0;
	transform: translateY(-40.5%) rotate(-10deg);
transform-origin : 0 100%;}
	to{opacity:1;
	transform: translateY(-40.5%) rotate(0);
	transform-origin : 0 100%;}
`;

const MentArea = styled.div<{ nowsection: number }>`
	display: flex;
	flex-direction: column;
	width: 50%;
	opacity: 0;
	${(props) =>
		props.nowsection === 3
			? css`
					transition: opacity 0.1s 1s;
					opacity: 1;
			  `
			: css`
					transition: opacity 1s;
					opacity: 0;
			  `};
`;

const Title = styled.h1`
	font-size: 6rem;
	font-weight: 400;
	position: absolute;
	margin: 0;
	left: 3rem;
	top: 3rem;
`;

const flash = keyframes`
	0%{
		display:none;
		opacity:0;
	} 1%{
		display:block;
		opacity:0;
	} 49%{
		opacity:1;
	} 99% {
		opacity:0;
		display:block;
	} 100% {
		display:none;
	}
`;

const HobbyImg1 = styled.img<{ nowsection: number }>`
	position: absolute;
	left: 10rem;
	top: 50%;
	transform: translateY(-50%);
	width: 60rem;
	z-index: 1;
	filter: drop-shadow(5px 5px 5px #00000070);
	opacity: 0;
	${(props) =>
		props.nowsection === 3
			? css`
					transition: opacity 0.5s 0.3s;
					opacity: 1;
			  `
			: css`
					transition: opacity 1s;
					opacity: 0;
			  `};
`;

const HobbyImg2 = styled.img<{ nowsection: number }>`
	position: absolute;
	left: 18rem;
	top: 50%;
	transform: translateY(-40.5%);
	width: 55rem;
	z-index: 0;
	filter: drop-shadow(5px 5px 5px #00000070);
	opacity: 0;
	${(props) =>
		props.nowsection === 3
			? css`
					animation: ${imgkey2} 0.4s 0.5s forwards ease-in-out;
			  `
			: css`
					animation: ${imgkeyback} 1s forwards;
			  `};
`;

const FlashEffect = styled.div<{ nowsection: number }>`
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	background: white;
	z-index: 2;
	opacity: 0;
	${(props) =>
		props.nowsection === 3
			? css`
					animation: ${flash} 0.3s 0.9s ease-in-out forwards;
			  `
			: css``}
`;

const MentTitle = styled.h2`
	font-size: 5.5rem;
	font-weight: 500;
`;

const MentSub = styled.h3`
	font-size: 3rem;
	font-weight: 200;
	margin-top: 1rem;
	margin-bottom: 1rem;
`;

const Info = styled.h3`
	font-size: 3rem;
	font-weight: 500;
	margin-top: 1rem;
	margin-bottom: 1rem;
`;

export default AboutMe;
