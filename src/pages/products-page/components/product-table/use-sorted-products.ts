import type { SortDescriptor } from '@heroui/react'
import type { IProduct } from '@shared/types'
import { useMemo } from 'react'

const compare = (a: IProduct, b: IProduct, column: keyof IProduct) => {
	const x = a[column]
	const y = b[column]

	if (column === 'updatedAt') {
		return Date.parse(String(x)) - Date.parse(String(y))
	}

	if (typeof x === 'number' && typeof y === 'number') {
		return x - y
	}

	return String(x ?? '').localeCompare(String(y ?? ''), 'ru')
}

export const useSortedProducts = (
	items: IProduct[],
	{ column, direction }: SortDescriptor,
) =>
	useMemo(() => {
		const key = column as keyof IProduct
		const sign = direction === 'descending' ? -1 : 1

		return items.toSorted((a, b) => sign * compare(a, b, key))
	}, [items, column, direction])
