import { List, Title, RefImg, RefComment, UseSkill } from './styled';
import Icon from './Icon';

import Imgsrc from 'imgs/reference/png/Five.png';

function Five({ isShow }: { isShow: boolean }) {
	return (
		<List className={isShow ? '' : 'notShow'}>
			<Title>R&D형 데이터셋 챌린지 플랫폼 페이지</Title>
			<RefImg src={isShow ? Imgsrc : ''} />
			<RefComment>
				회사 자체 제작 플랫폼 (R&D형 데이터셋 경연 챌린지 플랫폼) 페이지.
				<br />
				B2B로는 개최 지원(대회 개설, 참가자 관리 등), B2C로는 참가
				지원(대회참가, 파일제출 및 채점 등) 기능을 제공한다.
				<br />
				부트스트랩을 이용해 낯선 Grid System에 적응할 수 있었고, Transition을
				이해하는 계기가 되었다.
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

export default Five;
