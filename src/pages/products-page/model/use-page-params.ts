import { useQueryStates } from 'nuqs'
import { useCallback } from 'react'
import { productParsers } from './search-params'

const parsers = { page: productParsers.page, pageSize: productParsers.pageSize }

export const usePageParams = () => {
	const [{ page, pageSize }, setParams] = useQueryStates(parsers, {
		history: 'push',
	})

	const setPage = useCallback(
		(p: number) => setParams({ page: p }),
		[setParams],
	)
	const setPageSize = useCallback(
		(size: number) => setParams({ pageSize: size, page: null }),
		[setParams],
	)

	return { page, pageSize, setPage, setPageSize }
}
