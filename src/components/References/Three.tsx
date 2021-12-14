import { List, Title, RefImg, RefComment, UseSkill } from './styled';

import Imgsrc from 'imgs/reference/png/Three.png';

function Three({ isShow }: { isShow: boolean }) {
	return (
		<List className={isShow ? '' : 'nowShow'}>
			<Title>2021 사이버보안 AI·빅데이터 활용 경진대회 메인 홈페이지</Title>
			<RefImg src={Imgsrc} />
			<RefComment>
				'2021 사이버보안 AI·빅데이터 활용 경진대회'의 메인 홈페이지.
				<br />
				대회소개, 대회요강, 대회참가접수, 참가자관리, 문의게시판 기능을 제공.
				<br />
				세부적인 keyframes 설정을 통한 animation 개발을 통해 animation을 활용한
				개발에 관심을 가지게 되었다.
				<br />
				FE는 jQuery, BE는 Nodejs(w/Express)로 구성.
			</RefComment>
			<UseSkill></UseSkill>
		</List>
	);
}

export default Three;
