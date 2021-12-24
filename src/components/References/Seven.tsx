import { List, Title, RefImg, RefComment, UseSkill } from './styled';

import Imgsrc from 'imgs/reference/png/Seven.png';
import Icon from './Icon';

function Seven({ isShow }: { isShow: boolean }) {
	return (
		<List className={isShow ? '' : 'notShow'}>
			<Title>개인 프론트엔드 포트폴리오 페이지</Title>
			<RefImg src={isShow ? Imgsrc : ''} />
			<RefComment>
				React의 장점을 깨닫고 포트폴리오 관리를 위해 가장 최근에 개발한 페이지.
				<br />
				더이상 jQuery는 사용하지 않고, React와 Typescript로 구현하고 있다.
				<br />
				Full Screen Scroll 개발에서 약간 지연되었다.
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
