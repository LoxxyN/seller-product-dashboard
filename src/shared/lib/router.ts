type TRouterLinks = '/analytics' | '/products'
type TRouterLabel = 'analitycs' | 'produtcs'
type TRouter = Record<TRouterLabel, TRouterLinks>

export const ROUTER: Readonly<TRouter> = {
	analitycs: '/analytics',
	produtcs: '/products',
}
