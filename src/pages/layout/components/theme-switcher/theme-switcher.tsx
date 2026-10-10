import { Button, useTheme } from '@heroui/react'
import { Moon, Sun } from 'lucide-react'

export const ThemeSwitcher = () => {
	const { resolvedTheme, setTheme } = useTheme('system')

	return (
		<div className='flex items-center h-9 gap-2 bg-foreground/5 rounded-xl px-1.5'>
			<Button
				className='w-7 h-7 rounded-md'
				isIconOnly
				variant={resolvedTheme === 'light' ? 'primary' : 'ghost'}
				onPress={() => setTheme('light')}
			>
				<Sun />
			</Button>
			<Button
				className='w-7 h-7 rounded-md'
				isIconOnly
				variant={resolvedTheme === 'dark' ? 'primary' : 'ghost'}
				onPress={() => setTheme('dark')}
			>
				<Moon />
			</Button>
		</div>
	)
}
