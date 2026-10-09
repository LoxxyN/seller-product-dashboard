import { ROUTER } from '@shared/lib'
import { ChartBarBig, Package } from 'lucide-react'
import { Navlink } from '../navlink'
import './navbar.css'

export const Navbar = () => {
	return (
		<>
			<nav className='navbar'>
				<h3 className='pb-2 text-muted font-medium text-sm'>Магазин</h3>
				<ul className='navbar__links-list'>
					<li className='navbar__links-item'>
						<Navlink to={ROUTER['analitycs']}>
							<ChartBarBig size={22} />
							<span>Аналитика</span>
						</Navlink>
					</li>

					<li className='navbar__links-item'>
						<Navlink to={ROUTER['produtcs']}>
							<Package size={22} />
							<span>Товары</span>
						</Navlink>
					</li>
				</ul>
			</nav>
		</>
	)
}
