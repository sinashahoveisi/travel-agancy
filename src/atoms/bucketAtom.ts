import {atomWithReducer} from 'jotai/utils';
import remove from 'lodash/remove';
import {getFromStorage, saveToStorage} from '@/utils/storage';
import type {ResortProps} from '@/types/resort';
import type {BucketActionProps} from '@/types/bucket';

function callReducer(state: ResortProps[], action: BucketActionProps) {
  switch (action.type) {
    case 'ADD_RESORT':
      if (action?.resort) {
        const newAddState = [...state, action.resort];
        saveToStorage('bucket', newAddState);
        return [...state, action.resort];
      }
      return state;
    case 'DELETE_RESORT':
      const newRemoveState = [...state];
      remove(newRemoveState, ['id', action?.id]);
      saveToStorage('bucket', newRemoveState);
      return newRemoveState;
    default:
      return {...state};
  }
}

const bucketAtom = atomWithReducer(getFromStorage('bucket') || [], callReducer);

export default bucketAtom;
