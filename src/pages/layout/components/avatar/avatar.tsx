import { Avatar as HAvatar } from '@heroui/react'

export const Avatar = () => {
	return (
		<div>
			<HAvatar color='accent'>
				<HAvatar.Fallback>AC</HAvatar.Fallback>
			</HAvatar>
		</div>
	)
}
