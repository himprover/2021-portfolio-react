const INCREASE = 'sectionHandle/INCREASE' as const;
const DECREASE = 'sectionHandle/DECREASE' as const;
const INCREASE_BY = 'sectionHandle/INCREASE_BY' as const;

export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

export const increaseBy = (diff: number) => ({
	type: INCREASE_BY,
	payload: diff,
});

type SectionAction =
	| ReturnType<typeof increase>
	| ReturnType<typeof decrease>
	| ReturnType<typeof increaseBy>;

type SectionState = {
	nowsection: number;
};

const initialState: SectionState = {
	nowsection: 0,
};

function sectionHandle(
	state: SectionState = initialState,
	action: SectionAction
): SectionState {
	switch (action.type) {
		case INCREASE:
			return { nowsection: state.nowsection + 1 };
		case DECREASE:
			return { nowsection: state.nowsection - 1 };
		case INCREASE_BY:
			return { nowsection: state.nowsection + action.payload };
		default:
			return state;
	}
}

export default sectionHandle;
