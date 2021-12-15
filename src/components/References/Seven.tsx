import { List, Title, RefImg, RefComment, UseSkill } from './styled';

import Imgsrc from 'imgs/reference/png/Seven.png';
import Icon from './Icon';

function Seven({ isShow }: { isShow: boolean }) {
	return (
		<List className={isShow ? '' : 'nowShow'}>
			<Title>개인 프론트엔드 포트폴리오 페이지</Title>
			<RefImg src={Imgsrc} />
			<RefComment>
				포트폴리오 관리를 위해 가장 최근에 개발한 페이지.
				<br />
				React의 장점을 깨닫고 가장 심혈을 기울여 만든 페이지. 그러다보니
				아이러니하게 가장 높은 완성도를 가지고 있다.
				<br />
				더이상 jQuery는 사용하지 않고, React와 Typescript로 구현하고 있다. Full
				Screen Scroll 개발에서 약간 지연되었다.
				<br />
				FE는 React(w/typescript), BE는 Null 구성.
			</RefComment>
			<UseSkill>
				<Icon name='React' />
				<Icon name='Ts' />
				<Icon name='Html' />
			</UseSkill>
		</List>
	);
}

export default Seven;
