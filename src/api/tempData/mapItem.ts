import limgraveItems from './area/limgrave';
import { ResMapItem } from '../types';

type ResMapItems = {
  [n: number]: ResMapItem[];
};

const resMapItems: ResMapItems = {
  1: limgraveItems,
}

export default resMapItems;