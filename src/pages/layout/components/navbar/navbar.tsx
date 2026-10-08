import { NavLink } from 'react-router'
import { ROUTER } from '../../../../shared/lib'

export const Navbar = () => {
	return (
		<nav>
			<ul className='flex gap-4'>
				<li>
					<NavLink
						className={({ isActive }) =>
							isActive
								? 'underline underline-offset-2'
								: 'hover:underline underline-offset-2 text-muted'
						}
						to={ROUTER['analitycs']}
					>
						Аналитика
					</NavLink>
				</li>
				<li>
					<NavLink
						className={({ isActive }) =>
							isActive
								? 'underline underline-offset-2'
								: 'hover:underline underline-offset-2 text-muted'
						}
						to={ROUTER['produtcs']}
					>
						Товары
					</NavLink>
				</li>
			</ul>
		</nav>
	)
}
