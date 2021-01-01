import * as types from './types';
import { fromJS } from 'immutable';
import type { Reducer } from 'redux';





const defaultState = fromJS({
  bannerList: [],
  recommendList: []
})




const reducer: Reducer = (state = defaultState, action) => {
  switch (action.type) {
    case types.UPDATE_BANNER_LIST:
      return state.set ('bannerList', action.data);
    case types.UPDATE_RECOMMEND_LIST:
      return state.set ('recommendList', action.data);
    default:
      return state;
  }
}

export default reducer;