import {ResortProps} from '@/types/resort';

export type BucketActionType = 'ADD_RESORT' | 'DELETE_RESORT';

export interface BucketActionProps {
  type: BucketActionType;
  resort?: ResortProps;
  id?: number;
}
