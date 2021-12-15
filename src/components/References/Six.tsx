import { List, Title, RefImg, RefComment, UseSkill } from './styled';

import Imgsrc from 'imgs/reference/png/Six.png';
import Icon from './Icon';

function Six({ isShow }: { isShow: boolean }) {
	return (
		<List className={isShow ? '' : 'nowShow'}>
			<Title>사이버 보안 챌린지 2020 : 본선 실시간 리더보드</Title>
			<RefImg src={Imgsrc} />
			<RefComment>
				'사이버 보안 챌린지 : 2020'의 본선 기술경연 점수를 실시간으로 보여주는
				단일 페이지.
				<br />
				첫 실시간 페이지로 지금 생각해보면 많이 미흡한 페이지로 기억된다.
				<br />
				처음으로 Ajax, ChartJs를 사용하였는데 어려웠지만 재미있던 기억으로
				남는다.
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

export default Six;
