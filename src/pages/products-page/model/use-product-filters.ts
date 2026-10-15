import type { IProduct } from '@shared/types'
import { useCallback, useMemo, useState } from 'react'
import { filterProducts, type IProductFilters } from './filters'

const DEFAULT_FILTERS: IProductFilters = {
	category: null,
	status: null,
	stock: null,
}

export const useProductFilters = (products: IProduct[]) => {
	const [filters, setFilters] = useState<IProductFilters>(DEFAULT_FILTERS)

	const categories = useMemo(
		() => [...new Set(products.map(product => product.category))],
		[products],
	)

	const filteredProducts = useMemo(() => filterProducts(products, filters), [products, filters])

	const updateFilters = useCallback(
		(patch: Partial<IProductFilters>) => setFilters(prev => ({ ...prev, ...patch })),
		[],
	)

	const resetFilters = useCallback(() => setFilters(DEFAULT_FILTERS), [])

	const hasActiveFilters =
		filters.category !== null || filters.status !== null || filters.stock !== null

	return {
		filters,
		categories,
		filteredProducts,
		updateFilters,
		resetFilters,
		hasActiveFilters,
	}
}
