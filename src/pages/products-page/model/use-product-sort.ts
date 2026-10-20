import type { SortDescriptor } from '@heroui/react'
import { useQueryStates } from 'nuqs'
import { useCallback, useMemo } from 'react'
import { productParsers } from './search-params'

const parsers = {
	sort: productParsers.sort,
	order: productParsers.order,
	page: productParsers.page,
}

export const useProductSort = () => {
	const [{ sort, order }, setParams] = useQueryStates(parsers, {
		history: 'push',
	})

	const sortDescriptor = useMemo<SortDescriptor>(
		() => ({
			column: sort,
			direction: order === 'asc' ? 'ascending' : 'descending',
		}),
		[sort, order],
	)

	const onSortChange = useCallback(
		(descriptor: SortDescriptor) => {
			const column = productParsers.sort.parse(String(descriptor.column))
			if (!column) return

			setParams({
				sort: column,
				order: descriptor.direction === 'ascending' ? 'asc' : 'desc',
				page: null,
			})
		},
		[setParams],
	)

	return { sortDescriptor, onSortChange }
}
