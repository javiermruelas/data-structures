/**
 * In this file I will attempt to write all sorting algorithm's from scratch!
 */

/**
 * Insertion Sort
 * This is something like attempting to sort a deck of cards
 * by holding the unsorted cards and adding them to a sorted pile
 * one at a time.
 *
 * Time complexity:
 * Best case - O(n) or linear - if the array is already mostly sorted
 * Worst case - O(n^2) or exponential - if the array is entirely reversed
 * we would need to traverse it for each item in the array
 *
 * Space complexity:
 * Auxiliary space - O(1) or constant - input does not matter,
 * same space is always taken
 */
export function insertionSort(nums: number[]): number[] {
  const sorted = [nums[0]];

  for (let i = 1; i < nums.length; i++) {}

  return sorted;
}
