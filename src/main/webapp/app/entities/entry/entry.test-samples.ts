import dayjs from 'dayjs/esm';

import { IEntry, NewEntry } from './entry.model';

export const sampleWithRequiredData: IEntry = {
  id: 62831,
  title: 'calculating functionalities',
  content: '../fake-data/blob/hipster.txt',
  date: dayjs('2019-03-02T09:16'),
};

export const sampleWithPartialData: IEntry = {
  id: 39043,
  title: 'B2B static',
  content: '../fake-data/blob/hipster.txt',
  date: dayjs('2019-03-01T20:31'),
};

export const sampleWithFullData: IEntry = {
  id: 89909,
  title: 'Specialist Gloves',
  content: '../fake-data/blob/hipster.txt',
  date: dayjs('2019-03-01T20:32'),
};

export const sampleWithNewData: NewEntry = {
  title: 'Shoes generate',
  content: '../fake-data/blob/hipster.txt',
  date: dayjs('2019-03-02T06:33'),
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
