import { NavLink } from 'react-router'

interface NavlinkProps {
	label: string
	to: string
}

export const Navlink: React.FC<NavlinkProps> = ({ to, label }) => {
	return (
		<NavLink
			className={({ isActive }) =>
				isActive ? 'underline underline-offset-2' : 'hover:underline underline-offset-2 text-muted'
			}
			to={to}
		>
			{label}
		</NavLink>
	)
}
