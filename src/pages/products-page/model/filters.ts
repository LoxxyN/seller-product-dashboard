import type { IProduct, TProductStatus } from '@shared/types'

export type TStockFilter = 'in_stock' | 'not_in_stock'

export interface IProductFilters {
	search: string
	category: string | null
	status: TProductStatus | null
	stock: TStockFilter | null
}

const matchesSearch = (search: string, product: IProduct) => {
	const token = search.toLowerCase().split(/\s+/).filter(Boolean)

	if (token.length === 0) return true

	const haystack = `${product.name} ${product.sku}`.toLowerCase()

	return token.every(tok => haystack.includes(tok))
}

const matchesStock = (stock: TStockFilter | null, product: IProduct) => {
	if (!stock) return true
	return stock === 'in_stock' ? product.stock > 0 : product.stock === 0
}

export const filterProducts = (
	products: IProduct[],
	{ search, category, status, stock }: IProductFilters,
) =>
	products.filter(
		product =>
			matchesSearch(search, product) &&
			(!category || product.category === category) &&
			(!status || product.status === status) &&
			matchesStock(stock, product),
	)
