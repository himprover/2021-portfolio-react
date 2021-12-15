import { List, Title, RefImg, RefComment, UseSkill } from './styled';

import Imgsrc from 'imgs/reference/png/Four.png';
import Icon from './Icon';

function Four({ isShow }: { isShow: boolean }) {
	return (
		<List className={isShow ? '' : 'nowShow'}>
			<Title>2021 사이버보안 AI·빅데이터 활용 경진대회 실시간 리더보드</Title>
			<RefImg src={Imgsrc} />
			<RefComment>
				'2021 사이버보안 AI·빅데이터 활용 경진대회'의 예·본선 실시간 리더보드
				페이지.
				<br />
				통합·트랙 별 리더보드를 보여주며 TOP7, 미션 성공 팀 수, 시간대 별 제출
				횟수, 남은시간 등의 정보를 제공.
				<br />
				Chart.js, Ajax를 이용한 실시간 리더보드 구현으로 해당 기술들이 조금 더
				익숙해지는 계기가 되었다.
				<br />
				FE는 jQuery, BE는 Nodejs(w/Express)로 구성.
			</RefComment>
			<UseSkill>
				<Icon name='Html' />
				<Icon name='Jquery' />
				<Icon name='Node' />
			</UseSkill>
		</List>
	);
}

export default Four;
