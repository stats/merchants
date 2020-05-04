import { IAction } from './action.model';

export interface ILocation {
  name: string;
  description: string;
  actions: IAction[];
}
