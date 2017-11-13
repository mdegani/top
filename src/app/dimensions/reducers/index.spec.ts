import { Dimension } from '../models/dimension';
import { uniqueDimTypes } from './index';

describe('uniqueDimTypes', () => {
  const fakeArray: Dimension[] = [
    {
      id: 1,
      name: 'name1',
      dimType: 'dim1'
    },
    {
      id: 2,
      name: 'name2',
      dimType: 'dim2'
    },
    {
      id: 3,
      name: 'name3',
      dimType: 'dim1'
    },
    {
      id: 4,
      name: 'name4',
      dimType: 'dim3'
    },
    {
      id: 4,
      name: 'name4',
      dimType: 'dim3'
    }
  ];
  it('should get unique dimTypes from collection', () => {
    expect(uniqueDimTypes(fakeArray)).toEqual(['dim1', 'dim2', 'dim3']);
  });
});
