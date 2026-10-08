type TRouterLinks = '/analytics' | '/products'
type TRouterLabel = 'analitycs' | 'produtcs'

export const ROUTER: Record<TRouterLabel, TRouterLinks> = {
	analitycs: '/analytics',
	produtcs: '/products',
} as const
