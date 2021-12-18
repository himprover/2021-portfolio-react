const INCREASE = 'sectionHandle/INCREASE' as const;
const DECREASE = 'sectionHandle/DECREASE' as const;
const CHANGE_BY = 'sectionHandle/CHANGE_BY' as const;

export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

export const changeBy = (diff: { sum: number; direction: string }) => ({
	type: CHANGE_BY,
	payload: diff,
});

type SectionAction =
	| ReturnType<typeof increase>
	| ReturnType<typeof decrease>
	| ReturnType<typeof changeBy>;

type SectionState = {
	nowsection: number;
	direction: string;
};

const initialState: SectionState = {
	nowsection: 0,
	direction: 'down',
};

function sectionHandle(
	state: SectionState = initialState,
	action: SectionAction
): SectionState {
	switch (action.type) {
		case INCREASE:
			return { nowsection: state.nowsection + 1, direction: 'down' };
		case DECREASE:
			return { nowsection: state.nowsection - 1, direction: 'up' };
		case CHANGE_BY:
			return {
				nowsection: state.nowsection + action.payload.sum,
				direction: action.payload.direction,
			};
		default:
			return state;
	}
}

export default sectionHandle;
