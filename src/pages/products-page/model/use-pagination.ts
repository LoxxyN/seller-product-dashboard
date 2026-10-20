import { useMemo } from 'react'

interface IPaginationControl {
	page: number
	pageSize: number
	setPage: (page: number) => void
	setPageSize: (size: number) => void
}

export const usePagination = <T>(
	items: T[],
	{ page: requestedPage, pageSize, setPage, setPageSize }: IPaginationControl,
) => {
	const total = items.length
	const totalPages = Math.max(1, Math.ceil(total / pageSize))
	const page = Math.min(Math.max(1, requestedPage), totalPages)

	const pageItems = useMemo(
		() => items.slice((page - 1) * pageSize, page * pageSize),
		[items, pageSize, page],
	)

	return { page, pageSize, total, pageItems, setPage, setPageSize }
}
