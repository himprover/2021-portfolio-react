export const redColor: string = '#A82B11';
export const darkRedColor: string = '#4D150A';
export const greenColor: string = '#0A6A56';

export const darkTheme = {
	bgColor: '#212121', // 기본 설정
	fontColor: '#fff', // 기본 설정
	// HEADER
	headerBgColor: darkRedColor,

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
};

export const lightTheme = {
	bgColor: '#FEF5ED',
	fontColor: '#4c3f36',
	//HEADER
	headerBgColor: redColor,

	// MAIN
	mainHelloColor: '#000000',
	mainTextShadow: '4px 4px 10px rgba(0, 0, 0, 0.5)',
	mainP1Color: '#9c826f',
	mainP2Color: '#4c3f36',
};

export const theme = {
	lightTheme,
	darkTheme,
};

export default theme;
