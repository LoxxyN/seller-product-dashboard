import { Button } from '@heroui/react'
import { mockProducts } from '@shared/lib'
import { Plus } from 'lucide-react'
import { PageHeading, ProductFilters, ProductTable } from './components'

const productQuantity = mockProducts.length

export const ProductsPage = () => {
	return (
		<div>
			<div className='flex flex-col mb-5'>
				<PageHeading
					productQuantity={productQuantity}
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
