import { combineReducers } from 'redux';
import sectionHandle from 'modules/sectionHandle';
import loader from 'modules/loader';

const rootReducer = combineReducers({
	sectionHandle,
	loader,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
