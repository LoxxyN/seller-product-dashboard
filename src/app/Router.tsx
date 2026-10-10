import { BrowserRouter, Route, Routes } from 'react-router'
import { AnalyticsPage, Layout, ProductsPage } from '../pages'

export const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route path='products' element={<ProductsPage />} />
					<Route path='analytics' element={<AnalyticsPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}
