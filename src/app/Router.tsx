import { ROUTER } from '@shared/lib'
import { BrowserRouter, Route, Routes } from 'react-router'
import { AnalyticsPage, Layout, ProductsPage } from '../pages'

export const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route path={ROUTER['produtcs']} element={<ProductsPage />} />
					<Route path={ROUTER['analitycs']} element={<AnalyticsPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}
