import {atom} from 'jotai';
import {atomWithReducer} from 'jotai/utils';
import remove from 'lodash/remove';
import {ResortProps} from '@/types/resort';

function callReducer(state: any[], action: any) {
  switch (action.type) {
    case 'ADD_RESORT':
      return [...state, action.resort];
    case 'DELETE_RESORT':
      const newState = [...state];
      remove(newState, ['id', action.id]);
      return newState;
    default:
      return {...state};
  }
}

const bucketAtom = atomWithReducer([], callReducer);

export default bucketAtom;
