import type { Key, Selection, SortDescriptor } from '@heroui/react'
import { Table as HTable } from '@heroui/react'

export interface ITableRow {
	id: Key
}

export interface ITableBaseColumn {
	label: string
	isRowHeader?: boolean
	allowsSorting?: boolean
	renderHeader?: () => React.ReactNode
}

export interface ITableDataColumn<T extends ITableRow> extends ITableBaseColumn {
	id: Extract<keyof T, string>
	isCustom?: false
}

export interface ITableCustomColumn extends ITableBaseColumn {
	id: string
	isCustom: true
}

export type TableColumn<T extends ITableRow> = ITableDataColumn<T> | ITableCustomColumn

export interface ITableClassNames {
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

export interface ITableSlots {
	top?: React.ReactNode
	footer?: React.ReactNode
	loadMore?: React.ReactNode
}

export interface ITableRenderContext<T extends ITableRow, Column extends TableColumn<T>> {
	item: T
	column: Column
	columnIndex: number
}

export type TableProps<T extends ITableRow, Column extends TableColumn<T> = TableColumn<T>> = {
	columns: Column[]
	items: T[]
	ariaLabel?: string
	aria_label?: string
	slots?: ITableSlots
	classNames?: ITableClassNames
	footerSlot?: React.ReactNode
	footer_slot?: React.ReactNode
	selectionMode?: 'none' | 'single' | 'multiple'
	selectedKeys?: Selection
	onSelectionChange?: (keys: Selection) => void
	sortDescriptor?: SortDescriptor
	onSortChange?: (descriptor: SortDescriptor) => void
	renderCell?: (item: T, column: Column) => React.ReactNode
	renderEmptyState?: () => React.ReactNode
	getColumnProps?: (column: Column) => Partial<React.ComponentProps<typeof HTable.Column>>
	getRowProps?: (item: T) => Partial<React.ComponentProps<typeof HTable.Row<T>>>
	getCellProps?: (
		context: ITableRenderContext<T, Column>,
	) => Partial<React.ComponentProps<typeof HTable.Cell>>
	rootProps?: Partial<React.ComponentProps<typeof HTable>>
	scrollContainerProps?: Partial<React.ComponentProps<typeof HTable.ScrollContainer>>
	contentProps?: Partial<React.ComponentProps<typeof HTable.Content>>
	headerProps?: Partial<React.ComponentProps<typeof HTable.Header<Column>>>
	bodyProps?: Partial<React.ComponentProps<typeof HTable.Body<T>>>
	footerProps?: Partial<React.ComponentProps<typeof HTable.Footer>>
}

const renderDefaultCell = <T extends ITableRow, Column extends TableColumn<T>>(
	item: T,
	column: Column,
) => {
	if (column.isCustom) {
		return null
	}

	const value = item[column.id]

	if (value === null || value === undefined) {
		return null
	}

	return String(value)
}

export const Table = <T extends ITableRow, Column extends TableColumn<T> = TableColumn<T>>({
	columns,
	items,
	ariaLabel,
	aria_label,
	slots,
	classNames,
	footerSlot,
	footer_slot,
	selectionMode = 'none',
	selectedKeys,
	onSelectionChange,
	sortDescriptor,
	onSortChange,
	renderCell,
	renderEmptyState,
	getColumnProps,
	getRowProps,
	getCellProps,
	rootProps,
	scrollContainerProps,
	contentProps,
	headerProps,
	bodyProps,
	footerProps,
}: TableProps<T, Column>) => {
	const footer = slots?.footer ?? footerSlot ?? footer_slot

	return (
		<HTable {...rootProps} className={classNames?.root ?? rootProps?.className}>
			{slots?.top}
			<HTable.ScrollContainer
				{...scrollContainerProps}
				className={classNames?.scrollContainer ?? scrollContainerProps?.className}
			>
				<HTable.Content
					{...contentProps}
					aria-label={ariaLabel ?? aria_label ?? contentProps?.['aria-label']}
					className={classNames?.content ?? contentProps?.className}
					selectionMode={selectionMode}
					selectedKeys={selectedKeys}
					onSelectionChange={onSelectionChange}
					sortDescriptor={sortDescriptor}
					onSortChange={onSortChange}
				>
					<HTable.Header
						{...headerProps}
						className={classNames?.header ?? headerProps?.className}
						columns={columns}
					>
						{column => {
							const columnProps = getColumnProps?.(column)

							return (
								<HTable.Column
									{...columnProps}
									id={column.id}
									className={classNames?.column ?? columnProps?.className}
									isRowHeader={column.isRowHeader}
									allowsSorting={column.allowsSorting}
								>
									{column.renderHeader ? column.renderHeader() : column.label}
								</HTable.Column>
							)
						}}
					</HTable.Header>
					<HTable.Body
						{...bodyProps}
						className={classNames?.body ?? bodyProps?.className}
						items={items}
						renderEmptyState={renderEmptyState}
					>
						{item => {
							const rowProps = getRowProps?.(item)

							return (
								<HTable.Row
									{...rowProps}
									id={item.id}
									className={classNames?.row ?? rowProps?.className}
								>
									{columns.map((column, columnIndex) => {
										const cellProps = getCellProps?.({
											item,
											column,
											columnIndex,
										})

										return (
											<HTable.Cell
												{...cellProps}
												key={column.id}
												className={classNames?.cell ?? cellProps?.className}
											>
												{renderCell ? renderCell(item, column) : renderDefaultCell(item, column)}
											</HTable.Cell>
										)
									})}
									{slots?.loadMore}
								</HTable.Row>
							)
						}}
					</HTable.Body>
				</HTable.Content>
			</HTable.ScrollContainer>
			{footer && (
				<HTable.Footer {...footerProps} className={classNames?.footer ?? footerProps?.className}>
					{footer}
				</HTable.Footer>
			)}
		</HTable>
	)
}
