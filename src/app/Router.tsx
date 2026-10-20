import { ROUTER } from '@shared/lib'
import { BrowserRouter, Route, Routes } from 'react-router'
import { AnalyticsPage, Layout, ProductsPage } from '../pages'
import { QueryProvider } from './query-provider'

export const Router = () => {
	return (
		<QueryProvider>
			<BrowserRouter>
				<Routes>
					<Route element={<Layout />}>
						<Route path={ROUTER['produtcs']} index element={<ProductsPage />} />
						<Route path={ROUTER['analitycs']} element={<AnalyticsPage />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</QueryProvider>
	)
}
