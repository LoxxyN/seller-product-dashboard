import { cn, Pagination, ToggleButton, ToggleButtonGroup } from '@heroui/react'
import { getPageRange } from '../../model/get-page-range'

export interface ITablePaginationProps {
	page: number
	pageSize: number
	total: number // Общее количество записей (не страниц)
	pageSizeOptions?: number[]
	onPageChange: (page: number) => void
	onPageSizeChange: (pageSize: number) => void
	className?: string
}

const DEFAULT_PAGE_SIZE_OPTIONS = [25, 50, 100]

export const TablePagination: React.FC<ITablePaginationProps> = ({
	page,
	pageSize,
	total,
	pageSizeOptions = DEFAULT_PAGE_SIZE_OPTIONS,
	onPageChange,
	onPageSizeChange,
	className,
}) => {
	const totalPages = Math.max(1, Math.ceil(total / pageSize))
	const currentPage = Math.min(Math.max(page, 1), totalPages)

	const from = total === 0 ? 0 : (currentPage - 1) * pageSize + 1
	const to = Math.min(currentPage * pageSize, total)

	return (
		<Pagination
			size='sm'
			className={cn(
				'grid w-full grid-cols-[1fr_auto_1fr] items-center',
				className,
			)}
		>
			<Pagination.Summary>
				{from}–{to} из {total.toLocaleString('ru-RU')}
			</Pagination.Summary>

			<Pagination.Content>
				<Pagination.Item>
					<Pagination.Previous
						aria-label='Предыдущая страница'
						isDisabled={currentPage <= 1}
						onPress={() => onPageChange(currentPage - 1)}
					>
						<Pagination.PreviousIcon />
					</Pagination.Previous>
				</Pagination.Item>

				{getPageRange(currentPage, totalPages).map(item =>
					typeof item === 'number' ? (
						<Pagination.Item key={item}>
							<Pagination.Link
								isActive={item === currentPage}
								onPress={() => onPageChange(item)}
							>
								{item}
							</Pagination.Link>
						</Pagination.Item>
					) : (
						<Pagination.Item key={item}>
							<Pagination.Ellipsis />
						</Pagination.Item>
					),
				)}

				<Pagination.Item>
					<Pagination.Next
						aria-label='Следующая страница'
						isDisabled={currentPage >= totalPages}
						onPress={() => onPageChange(currentPage + 1)}
					>
						<Pagination.NextIcon />
					</Pagination.Next>
				</Pagination.Item>
			</Pagination.Content>

			<div className='flex items-center justify-end gap-3'>
				<span className='text-sm text-muted'>На странице</span>
				<ToggleButtonGroup
					size='sm'
					className='text-sm'
					selectionMode='single'
					disallowEmptySelection
					selectedKeys={[String(pageSize)]}
					onSelectionChange={keys => {
						const [key] = keys

						if (key !== undefined) onPageSizeChange(Number(key))
					}}
				>
					{pageSizeOptions.map((option, index) => (
						<ToggleButton key={option} id={String(option)}>
							{index > 0 && <ToggleButtonGroup.Separator />}
							{option}
						</ToggleButton>
					))}
				</ToggleButtonGroup>
			</div>
		</Pagination>
	)
}
