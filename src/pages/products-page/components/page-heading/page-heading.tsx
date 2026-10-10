import { pluralizeTovar } from '../../utils'

type PageHeadingProps = {
	productQuantity: number
	actionButtonSlot: React.ReactNode
}

export const PageHeading: React.FC<PageHeadingProps> = ({ productQuantity, actionButtonSlot }) => {
	return (
		<div className='flex justify-between items-center'>
			<div className='flex flex-col gap-1'>
				<h2 className='text-3xl text-foreground font-semibold'>Товары</h2>
				<p className='text-muted text-sm'>{pluralizeTovar(productQuantity)}</p>
			</div>
			{actionButtonSlot}
		</div>
	)
}
