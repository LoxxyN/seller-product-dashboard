import { adaptProducts, httpGet } from '@shared/api'
import type { IProductDTO } from '@shared/types'
import { useQuery } from '@tanstack/react-query'

const EMPTY: IProductDTO[] = []

const getProducts = async ({ signal }: { signal: AbortSignal }) => {
	const response = await httpGet<IProductDTO[]>('/products', signal)
	return adaptProducts(response)
}

export const useProducts = () => {
	const query = useQuery({
		queryKey: ['products'],
		queryFn: getProducts,
	})

	return { ...query, products: query.data ?? EMPTY }
}
