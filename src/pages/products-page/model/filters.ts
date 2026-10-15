import type { IProduct, TProductStatus } from '@shared/types'

export interface IProductFilters {
	category: string | null
	status: TProductStatus | null
}

export const filterProducts = (products: IProduct[], { category, status }: IProductFilters) =>
	products.filter(
		product =>
			(!category || product.category === category) && (!status || product.status === status),
	)
