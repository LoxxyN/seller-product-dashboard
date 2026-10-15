import { NavLink } from 'react-router'

interface NavlinkProps {
	children: React.ReactNode
	to: string
}

export const Navlink: React.FC<NavlinkProps> = ({ children, to }) => {
	return (
		<NavLink
			className={({ isActive }) =>
				isActive
					? 'navbar__links-link--active navbar__links-link'
					: 'navbar__links-link'
			}
			to={to}
		>
			{children}
		</NavLink>
	)
}
