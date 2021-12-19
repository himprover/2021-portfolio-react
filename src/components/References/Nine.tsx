import { List, Title, RefImg, RefComment, UseSkill } from './styled';

import Imgsrc from 'imgs/reference/png/Nine.png';
import Icon from './Icon';

function Nine({ isShow }: { isShow: boolean }) {
	return (
		<List className={isShow ? '' : 'notShow'}>
			<Title>그 외 개발 페이지</Title>
			<RefImg src={isShow ? Imgsrc : ''} />
			<RefComment>
				많은 기능이 없는 단순 랜딩, 안내, 신청 페이지 개발 및 사내 지출결의
				시스템 리뉴얼. 개발에 익숙해지는 기회가 되었다.
				<br />
				2019-인공지능그랜드챌린지, 개인정보비식별조치교육및세미나,
				사이버보안빅데이터활용강화교육, 사업자대상 위치정보 교육
				<br />
				2020-AI보안교육, 소프트웨어개발보안경진대회,
				비대면서비스보안강화지원사업성과공유회, 신기술적용 비대면 서비스
				보안시범사업 Q&A
			</RefComment>
			<UseSkill>
				<Icon name='React' />
				<Icon name='Nest' />
				<Icon name='Ts' />
				<Icon name='Jquery' />
				<Icon name='Node' />
				<Icon name='Php' />
				<Icon name='Html' />
			</UseSkill>
		</List>
	);
}

export default Nine;
