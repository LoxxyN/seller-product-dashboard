import { useDebounce } from '@shared/lib'
import type { IProduct } from '@shared/types'
import { useCallback, useMemo, useState } from 'react'
import { filterProducts, type IProductFilters } from './filters'

const DEFAULT_FILTERS: IProductFilters = {
	search: '',
	category: null,
	status: null,
	stock: null,
}

const SEARCH_DEBOUNCE = 300

export const useProductFilters = (products: IProduct[]) => {
	const [filters, setFilters] = useState<IProductFilters>(DEFAULT_FILTERS)

	const debounceSearch = useDebounce(filters.search, SEARCH_DEBOUNCE)
	const appliedSearch = filters.search === '' ? '' : debounceSearch

	const { category, status, stock } = filters

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
		(patch: Partial<IProductFilters>) =>
			setFilters(prev => ({ ...prev, ...patch })),
		[],
	)

	const resetFilters = useCallback(() => setFilters(DEFAULT_FILTERS), [])

	const hasActiveFilters =
		filters.category !== null ||
		filters.status !== null ||
		filters.stock !== null ||
		filters.search.trim() !== ''

	return {
		filters,
		categories,
		filteredProducts,
		updateFilters,
		resetFilters,
		hasActiveFilters,
	}
}
