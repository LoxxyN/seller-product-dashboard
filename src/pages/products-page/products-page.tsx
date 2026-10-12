import { Button } from '@heroui/react'
import { Plus } from 'lucide-react'
import { PageHeading, ProductFilters, ProductTable } from './components'

export const ProductsPage = () => {
	return (
		<div>
			<div className='flex flex-col mb-5'>
				<PageHeading
					productQuantity={48213}
					actionButtonSlot={
						<Button>
							<Plus />
							Добавить товар
						</Button>
					}
				/>
				<ProductFilters />
			</div>

			<ProductTable />
		</div>
	)
}
