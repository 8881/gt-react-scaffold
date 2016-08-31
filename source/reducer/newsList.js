/**
 * @since 2016-08-06 16:07
 * @author vivaxy
 */

import createReducer from '../library/createReducer';

import * as constant from '../constant/action';

const defaultState = [];

export default createReducer(defaultState, {
    [constant.APPEND_NEWS]: (state, action) => {
        return state.concat(action.list);
    },
});