import { List, Title, RefImg, RefComment, UseSkill } from './styled';

import Imgsrc from 'imgs/reference/png/Two.png';
import Icon from './Icon';

function Two({ isShow }: { isShow: boolean }) {
	return (
		<List className={isShow ? '' : 'notShow'}>
			<Title>사이버 보안 챌린지 : 2021 메인 홈페이지</Title>
			<RefImg src={isShow ? Imgsrc : ''} />
			<RefComment>
				'사이버 보안 챌린지 : 2021'의 메인 홈페이지.
				<br />
				대회소개, 대회요강, 대회참가접수, 참가자관리, 문의게시판 기능을 제공.
				<br />
				조건에 따라 다른 참가정보를 입력하는 기능 개발 과정에서 input제어를 다시
				한번 복습하게 되었다.
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

export default Two;
