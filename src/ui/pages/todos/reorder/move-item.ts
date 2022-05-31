export const addByIndex = <T, V>(
	arr: Array<T>,
	index: number,
	element: V
): Array<T | V> => [...arr.slice(0, index), element, ...arr.slice(index)]

export const delByIndex = <T>(arr: Array<T>, index: number): Array<T> => [
	...arr.slice(0, index),
	...arr.slice(index + 1),
]

const safeIndex = <T>(arr: Array<T>, index: number) => {
	if (index < 0 || index > arr.length) throw new Error('Invalid index')
}

// prettier-ignore
export default function moveItem<T>(arr: Array<T>, from: number, to: number){
	if (arr.length === 0) throw new Error('Invalid array length')
	const item = arr[from]

	 return (
		safeIndex(arr, from),
  	safeIndex(arr, to),
  	addByIndex(delByIndex(arr, from), to, item)
	)
}
