import { insertionSort } from '../sort';

describe('Insertion Sort', () => {
  it('should return a sorted array', () => {
    const test = [1, 2, 4, 3];
    const sorted = insertionSort(test);

    expect(sorted).toBe([1, 2, 3, 4]);
  });
});
