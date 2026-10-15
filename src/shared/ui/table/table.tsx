import type { Key, Selection, SortDescriptor } from '@heroui/react'
import { cn, Table as HTable } from '@heroui/react'

interface ITableRow {
	id: Key
}

interface ITableBaseColumn<T extends ITableRow> {
	label: string
	isRowHeader?: boolean
	allowsSorting?: boolean
	align?: 'start' | 'end'
	width?: number | string
	renderHeader?: () => React.ReactNode
	renderCell?: (item: T) => React.ReactNode
}

interface ITableDataColumn<T extends ITableRow> extends ITableBaseColumn<T> {
	id: Extract<keyof T, string>
	isCustom?: false
}

interface ITableCustomColumn<T extends ITableRow> extends ITableBaseColumn<T> {
	id: string
	isCustom: true
}

export type TableColumn<T extends ITableRow> = ITableDataColumn<T> | ITableCustomColumn<T>

interface ITableClassNames {
	root?: string
	scrollContainer?: string
	content?: string
	header?: string
	column?: string
	body?: string
	row?: string
	cell?: string
	footer?: string
}

interface ITableProps<T extends ITableRow> {
	columns: TableColumn<T>[]
	items: T[]
	ariaLabel: string
	variant?: 'primary' | 'secondary'
	classNames?: ITableClassNames
	selectionMode?: 'none' | 'single' | 'multiple'
	selectedKeys?: Selection
	onSelectionChange?: (keys: Selection) => void
	sortDescriptor?: SortDescriptor
	onSortChange?: (descriptor: SortDescriptor) => void
	renderEmptyState?: () => React.ReactNode
	footer?: React.ReactNode
}

const renderDefaultCell = <T extends ITableRow>(item: T, column: TableColumn<T>) => {
	if (column.isCustom) {
		return null
	}

	const value = item[column.id]

	return value === null || value === undefined ? null : String(value)
}

export const Table = <T extends ITableRow>({
	columns,
	items,
	ariaLabel,
	variant,
	classNames,
	selectionMode = 'none',
	selectedKeys,
	onSelectionChange,
	sortDescriptor,
	onSortChange,
	renderEmptyState,
	footer,
}: ITableProps<T>) => (
	<HTable variant={variant} className={classNames?.root}>
		<HTable.ScrollContainer className={classNames?.scrollContainer}>
			<HTable.Content
				aria-label={ariaLabel}
				className={classNames?.content}
				selectionMode={selectionMode}
				selectedKeys={selectedKeys}
				onSelectionChange={onSelectionChange}
				sortDescriptor={sortDescriptor}
				onSortChange={onSortChange}
			>
				<HTable.Header className={classNames?.header} columns={columns}>
					{column => (
						<HTable.Column
							id={column.id}
							className={cn(column.align === 'end' && 'text-end', classNames?.column)}
							style={column.width === undefined ? undefined : { width: column.width }}
							isRowHeader={column.isRowHeader}
							allowsSorting={column.allowsSorting}
						>
							{({ sortDirection }) => {
								if (column.renderHeader) return column.renderHeader()

								if (column.allowsSorting) {
									return (
										<HTable.SortableColumnHeader
											sortDirection={sortDirection}
											className={cn(column.align === 'end' && 'justify-end')}
										>
											{column.label}
										</HTable.SortableColumnHeader>
									)
								}

								return column.label
							}}
						</HTable.Column>
					)}
				</HTable.Header>
				<HTable.Body className={classNames?.body} renderEmptyState={renderEmptyState}>
					<HTable.Collection items={items}>
						{item => (
							<HTable.Row id={item.id} className={classNames?.row}>
								<HTable.Collection items={columns}>
									{column => (
										<HTable.Cell
											className={cn(column.align === 'end' && 'text-end', classNames?.cell)}
										>
											{column.renderCell
												? column.renderCell(item)
												: renderDefaultCell(item, column)}
										</HTable.Cell>
									)}
								</HTable.Collection>
							</HTable.Row>
						)}
					</HTable.Collection>
				</HTable.Body>
			</HTable.Content>
		</HTable.ScrollContainer>
		{footer && <HTable.Footer className={classNames?.footer}>{footer}</HTable.Footer>}
	</HTable>
)
