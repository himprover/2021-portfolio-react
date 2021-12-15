import styled from 'styled-components';

import { ReactComponent as ReactSVG } from 'imgs/reference/svg/skillReact.svg';
import { ReactComponent as HtmlSVG } from 'imgs/reference/svg/skillHtml.svg';
import { ReactComponent as NodeSVG } from 'imgs/reference/svg/skillNode.svg';
import { ReactComponent as PhpSVG } from 'imgs/reference/svg/skillPhp.svg';
import { ReactComponent as JquerySVG } from 'imgs/reference/svg/skillJquery.svg';
import { ReactComponent as TsSVG } from 'imgs/reference/svg/skillTs.svg';
import { ReactComponent as NestSVG } from 'imgs/reference/svg/skillNest.svg';

const svgHandle = (name: string) => {
	switch (name) {
		case 'React':
			return <ReactSVG />;
		case 'Html':
			return <HtmlSVG />;
		case 'Node':
			return <NodeSVG />;
		case 'Php':
			return <PhpSVG />;
		case 'Jquery':
			return <JquerySVG />;
		case 'Ts':
			return <TsSVG />;
		case 'Nest':
			return <NestSVG />;
	}
};

function Icon({ name }: { name: string }) {
	return <SvgDIV>{svgHandle(name)}</SvgDIV>;
}

const SvgDIV = styled.div`
	width: 8%;
	& > svg {
		filter: drop-shadow(3px 3px 1px #3a3a3a);
	}
`;

export default Icon;
