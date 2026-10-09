import { ROUTER } from '@shared/lib'
import { Navlink } from '../navlink'

export const Navbar = () => {
	return (
		<nav>
			<ul className='flex gap-4'>
				<li>
					<Navlink to={ROUTER['analitycs']} label='Аналитика' />
				</li>
				<li>
					<Navlink to={ROUTER['produtcs']} label='Товары' />
				</li>
			</ul>
		</nav>
	)
}
