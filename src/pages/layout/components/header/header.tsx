import { Avatar } from '../avatar'
import { Logo } from '../logo'
import { ThemeSwitcher } from '../theme-switcher'

export const Header = () => {
	return (
		<header>
			<div className='px-6 py-2 flex justify-between items-center'>
				<Logo />
				<div className='flex gap-4 items-center'>
					<ThemeSwitcher />
					<Avatar />
				</div>
			</div>
		</header>
	)
}
