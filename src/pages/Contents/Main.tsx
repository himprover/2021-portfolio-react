import styled from 'styled-components';
import { forwardRef } from 'react';

const Main = forwardRef<any>((props, ref) => {
	return (
		<MainDIV ref={ref}>
			<TextDIV>
				<Hello>Hello</Hello>
				<ImHwang>I'm Hwang</ImHwang>
				<FE>
					FRONT
					<br />
					Developer
				</FE>
			</TextDIV>
			<ImgDIV></ImgDIV>
		</MainDIV>
	);
});

const MainDIV = styled.div``;

const TextDIV = styled.div``;
const Hello = styled.h2``;
const ImHwang = styled.h1``;
const FE = styled.h1``;

const ImgDIV = styled.div``;

const Img = styled.img``;

export default Main;
