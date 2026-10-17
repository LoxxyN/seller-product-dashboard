import { ROUTER } from '@shared/lib'
import { BrowserRouter, Route, Routes } from 'react-router'
import { AnalyticsPage, Layout, ProductsPage } from '../pages'

export const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Layout />}>
					<Route path={ROUTER['produtcs']} index element={<ProductsPage />} />
					<Route path={ROUTER['analitycs']} element={<AnalyticsPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}
