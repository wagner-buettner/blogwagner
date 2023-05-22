import { IEntry } from 'app/entities/entry/entry.model';

export interface ITag {
  id: number;
  name?: string | null;
  entries?: Pick<IEntry, 'id'>[] | null;
}

export type NewTag = Omit<ITag, 'id'> & { id: null };
