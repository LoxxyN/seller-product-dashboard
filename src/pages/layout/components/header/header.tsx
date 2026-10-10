import { Avatar, Logo, ThemeSwitcher } from './ui'

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
