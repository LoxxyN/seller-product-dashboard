import { httpGet } from '@shared/api'
import type { IProduct } from '@shared/types'
import { useQuery } from '@tanstack/react-query'

const EMPTY: IProduct[] = []

const getProducts = ({ signal }: { signal: AbortSignal }) =>
	httpGet<IProduct[]>('/products', signal)

export const useProducts = () => {
	const query = useQuery({
		queryKey: ['products'],
		queryFn: getProducts,
	})

	return { ...query, products: query.data ?? EMPTY }
}
