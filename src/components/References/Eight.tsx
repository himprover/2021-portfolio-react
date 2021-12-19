import { List, Title, RefImg, RefComment, UseSkill } from './styled';

import Imgsrc from 'imgs/reference/png/Eight.png';
import Icon from './Icon';

function Eight({ isShow }: { isShow: boolean }) {
	return (
		<List className={isShow ? '' : 'nowShow'}>
			<Title>2021 공개 SW 페스티벌 참여</Title>
			<RefImg src={Imgsrc} />
			<RefComment>
				2021 공개 SW 페스티벌에 개인팀으로 모바일 앱 부문 참여.
				<br />
				준비기간에 업무량이 많아져 디자인 후 개발을 완료하지는 못해서 매우
				아쉬운 프로젝트.
				<br />
				Figma에 익숙해지는 계기가 되었다.
				<br />
				React Native, Ts로 개발.
			</RefComment>
			<UseSkill>
				<Icon name='React' />
				<Icon name='Ts' />
			</UseSkill>
		</List>
	);
}

export default Eight;
