const SET = 'loader/SET' as const;

export const set = () => ({ type: SET });

type LoadingAction = ReturnType<typeof set>;

type LoadingState = {
	isLoading: boolean;
};

const initialState: LoadingState = {
	isLoading: true,
};

function loader(
	state: LoadingState = initialState,
	action: LoadingAction
): LoadingState {
	switch (action.type) {
		case SET:
			return { isLoading: false };
		default:
			return state;
	}
}

export default loader;
