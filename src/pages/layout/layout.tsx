import { Outlet } from 'react-router'
import { Header, Sidebar } from './components'
import './layout.css'

export const Layout = () => {
	return (
		<div className='layout'>
			<div className='header__wrapper'>
				<Header />
			</div>

			<div className='sidebar__wrapper'>
				<Sidebar />
			</div>

			<div className='content__wrapper'>
				<main className='bg-surface-secondary'>
					<Outlet />
				</main>
			</div>
		</div>
	)
}
