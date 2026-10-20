import { useDebounce } from '@shared/lib'
import type { IProduct } from '@shared/types'
import { debounce, useQueryStates } from 'nuqs'
import { useCallback, useMemo } from 'react'
import { filterProducts, type IProductFilters } from './filters'
import { productParsers } from './search-params'

const SEARCH_DEBOUNCE = 300

const parsers = {
	search: productParsers.search,
	category: productParsers.category,
	status: productParsers.status,
	stock: productParsers.stock,
	page: productParsers.page,
}

export const useProductFilters = (products: IProduct[]) => {
	const [params, setParams] = useQueryStates(parsers, { history: 'push' })
	const { search, category, status, stock } = params

	const filters: IProductFilters = useMemo(
		() => ({ search, category, status, stock }),
		[search, category, status, stock],
	)

	const debounceSearch = useDebounce(search, SEARCH_DEBOUNCE)
	const appliedSearch = search === '' ? '' : debounceSearch

	const filteredProducts = useMemo(
		() =>
			filterProducts(products, {
				search: appliedSearch,
				category,
				status,
				stock,
			}),
		[products, appliedSearch, category, status, stock],
	)

	const categories = useMemo(
		() => [...new Set(products.map(product => product.category))],
		[products],
	)

	const updateFilters = useCallback(
		(patch: Partial<IProductFilters>) => {
			const isTyping = Object.keys(patch).length === 1 && Boolean(patch.search)
			setParams(
				{ ...patch, page: null }, // page: null = сброс на 1 в том же обновлении
				isTyping
					? { history: 'replace', limitUrlUpdates: debounce(SEARCH_DEBOUNCE) }
					: undefined,
			)
		},
		[setParams],
	)

	const resetFilters = useCallback(
		() =>
			setParams({
				search: null,
				category: null,
				status: null,
				stock: null,
				page: null,
			}),
		[setParams],
	)

	const hasActiveFilters =
		category !== null ||
		status !== null ||
		stock !== null ||
		search.trim() !== ''

	return {
		filters,
		categories,
		filteredProducts,
		updateFilters,
		resetFilters,
		hasActiveFilters,
	}
}
