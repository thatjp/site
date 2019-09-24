import { NEW_NAV_SECTION } from './types';

export const changeSection = () => (dispatch) => {
  dispatch({
    type: NEW_NAV_SECTION,
    payload: section,
  });
};
