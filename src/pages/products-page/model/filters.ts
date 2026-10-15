import type { IProduct, TProductStatus } from '@shared/types'

export type TStockFilter = 'in_stock' | 'not_in_stock'

export interface IProductFilters {
	category: string | null
	status: TProductStatus | null
	stock: TStockFilter | null
}

const matchesStock = (stock: TStockFilter | null, product: IProduct) => {
	if (!stock) return true
	return stock === 'in_stock' ? product.stock > 0 : product.stock < 0
}

export const filterProducts = (
	products: IProduct[],
	{ category, status, stock }: IProductFilters,
) =>
	products.filter(
		product =>
			(!category || product.category === category) &&
			(!status || product.status === status) &&
			matchesStock(stock, product),
	)
