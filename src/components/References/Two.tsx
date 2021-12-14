import { List, Title, RefImg, RefComment, UseSkill } from './styled';

function Two({ isShow }: { isShow: boolean }) {
	return (
		<List className={isShow ? '' : 'nowShow'}>
			<Title>가나다라마바사 아자차 페이지</Title>
			<RefImg src='https://fakeimg.pl/300/ffff00/' />
			<RefComment>
				안녕하세요. 이건 해당 페이지 개발 소개 멘트입니다. 안녕하세요. 이건 해당
				페이지 개발 소개 멘트입니다. 안녕하세요. 이건 해당 페이지 개발 소개
				멘트입니다. 안녕하세요. 이건 해당 페이지 개발 소개 멘트입니다.
				안녕하세요. 이건 해당 페이지 개발 소개 멘트입니다. 안녕하세요. 이건 해당
				페이지 개발 소개 멘트입니다. 안녕하세요. 이건 해당 페이지 개발 소개
				멘트입니다.
			</RefComment>
			<UseSkill></UseSkill>
		</List>
	);
}

export default Two;
