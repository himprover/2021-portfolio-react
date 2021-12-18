import { ReactComponent as MainSvg } from 'imgs/header/svg/iconMain.svg';
import { ReactComponent as SkillsSvg } from 'imgs/header/svg/iconSkills.svg';
import { ReactComponent as ReferenceSvg } from 'imgs/header/svg/iconReference.svg';
import { ReactComponent as AboutMeSvg } from 'imgs/header/svg/iconAboutme.svg';
import { ReactComponent as ContactSvg } from 'imgs/header/svg/iconContact.svg';

const SvgHandle = (name: string) => {
	switch (name) {
		case 'Main':
			return <MainSvg />;
		case 'Skills':
			return <SkillsSvg />;
		case 'Reference':
			return <ReferenceSvg />;
		case 'AboutMe':
			return <AboutMeSvg />;
		case 'Contact':
			return <ContactSvg />;
	}
};

function SvgBtn({ name }: { name: string }) {
	return <>{SvgHandle(name)}</>;
}

export default SvgBtn;
