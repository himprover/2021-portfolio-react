export const redColor: string = '#A82B11';
export const darkRedColor: string = '#4D150A';
export const greenColor: string = '#0A6A56';

export const darkTheme = {
	bgColor: '#212121', // 기본 설정
	// fontColor: '#fff', // 기본 설정
	// HEADER
	headerBgColor: darkRedColor,
	titleFontColor: '#FFFFFF',

	//	MAIN
	mainBgColor: 'radial-gradient(50% 50% at 50% 50%, #444444 0%, #1B1B1B 100%)',
	mainHelloColor: '#CECECE',
	mainImHColor: '#FFFFFF',
	mainFEColor: '#4B4B4B',
	mainTextShadow: '4px 4px 10px rgba(0, 0, 0, 0.5)',
	mainP1Color: '#7E7E7E',
	mainP2Color: '#444444',

	// SKILLS
	skillsBgColor: '#282828',
	skillsFontColor: '#FFFFFF',
	skillsPentagonBgColor: '#64646465',
	skillsSquareBgColor: '#ffffff64',
	skillsStorkeColor: '#FFFFFF',

	// AboutMe
	aboutmeMentTitleColor: '#FFFFFF',
	aboutmeMentSubColor: '#FFFFFF',
	aboutmeInfoColor: '#FFFFFF',
	aboutmeFlashBgColor: '#FFFFFF',
	aboutmeFlashColor: '#000000',

	// Contact
	contactTitleColor: '#FFFFFF',
	contactSubTitleColor: '#FFFFFF',
	contactShadow: '4px 4px 4px #000000',
};

export const lightTheme = {
	bgColor: '#FEF5ED',
	// fontColor: '#4c3f36',
	//HEADER
	headerBgColor: redColor,
	titleFontColor: '#4c3f36',
	// MAIN
	mainHelloColor: '#000000',
	mainImHColor: '#212121',
	mainFEColor: '#4c3f36',
	mainTextShadow: '4px 4px 10px rgba(0, 0, 0, 0.5)',
	mainP1Color: '#9c826f',
	mainP2Color: '#4c3f36',

	// SKILLS
	skillsFontColor: '#FFFFFF',
	skillsPentagonBgColor: '#64646465',
	skillsSquareBgColor: '#00000064',
	skillsStorkeColor: '#4c3f36',

	// AboutMe
	aboutmeMentTitleColor: '#4c3f36',
	aboutmeMentSubColor: '#000000',
	aboutmeInfoColor: '#4c3f36',
	aboutmeFlashBgColor: '#4c3f36',
	aboutmeFlashColor: '#FFFFFF',

	// Contact
	//contactBgColor: 'rgb(254 245 237 / 58%)',
	contactBgColor: '#00000040',
	contactTitleColor: '#FFFFFF',
	contactSubTitleColor: '#FFFFFF',
	contactShadow: '4px 4px 4px #00000080',
};

export const theme = {
	lightTheme,
	darkTheme,
};

export default theme;
