import { addByIndex, delByIndex } from './move-item'
// prettier-ignore
export default function moveBetween<T>(	from: Array<T>, to: Array<T>, fromIndex: number,toIndex: number): [Array<T>, Array<T>] {
	return [
		delByIndex(from, fromIndex),
		addByIndex(to, toIndex, from[fromIndex]),
	]
}
// prettier-ignore
export const moveBetweenCurry = <T>(from: Array<T>, to: Array<T>) => (fromIndex: number, toIndex: number): [Array<T>, Array<T>] =>
		[delByIndex(from, fromIndex), addByIndex(to, toIndex, from[fromIndex])]
