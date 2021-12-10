import { combineReducers } from 'redux';
import counter from 'modules/counter';
import loader from 'modules/loader';

const rootReducer = combineReducers({
	counter,
	loader,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
