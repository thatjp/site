import { NEW_NAV_SECTION } from '../actions/types';

const initialState = {
  currentSection: '',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case NEW_NAV_SECTION:
      return {
        ...state,
        currentSection: action.payload,
      };
    default:
      return state;
  }
}
