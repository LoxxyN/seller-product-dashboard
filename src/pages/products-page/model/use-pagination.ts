import { useCallback, useMemo, useState } from 'react'

export const usePagination = <T>(items: T[], initialPageSize: number = 50) => {
	const [requestedPage, setRequestedPage] = useState(1)
	const [pageSize, setPageSize] = useState(initialPageSize)
	const [prevItems, setPrevItems] = useState(items)

	if (prevItems !== items) {
		setPrevItems(items)
		setRequestedPage(1)
	}

	const total = items.length
	const totalPages = Math.max(1, Math.ceil(total / pageSize))
	const page = Math.min(requestedPage, totalPages)

	const pageItems = useMemo(
		() => items.slice((page - 1) * pageSize, page * pageSize),
		[items, pageSize, page],
	)

	const changePageSize = useCallback((size: number) => {
		setPageSize(size)
		setRequestedPage(1)
	}, [])

	return {
		page,
		pageSize,
		total,
		pageItems,
		setPage: setRequestedPage,
		setPageSize: changePageSize,
	}
}
