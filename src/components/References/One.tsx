import { List, Title, RefImg, RefComment, UseSkill } from './styled';

import Imgsrc from 'imgs/reference/png/One.png';
import Icon from './Icon';

function One({ isShow }: { isShow: boolean }) {
	return (
		<List className={isShow ? '' : 'nowShow'}>
			<Title>사이버 보안 챌린지 : 2021 본선 실시간 리더보드</Title>
			<RefImg src={Imgsrc} />
			<RefComment>
				'사이버 보안 챌린지 : 2021'의 본선 기술경연 점수를 실시간으로 보여주는
				단일 페이지.
				<br />
				실시간으로 기술경연 점수가 채점되어 결과가 나오면 해당 점수가 페이지에
				반영된다.
				<br />
				실시간 데이터를 어떻게 효율적으로 보여줄 수 있을지 고민하게 된 계기가
				되었다.
				<br />
				FE는 React(w/typescript), BE는 NestJS로 구성.
			</RefComment>
			<UseSkill>
				<Icon name='React' />
				<Icon name='Ts' />
			</UseSkill>
		</List>
	);
}

export default One;
