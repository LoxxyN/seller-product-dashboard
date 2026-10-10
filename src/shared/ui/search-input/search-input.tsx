import { Description, FieldError, Label, SearchField } from '@heroui/react'

type SearchInputProps = {
	label?: string
	description?: string
	placeholder?: string
	name?: string
	errorMessage?: string
	isInvalid?: boolean
	value: string
	onChange: (value: string) => void
	onSubmit?: (value: string) => void
}

export const SearchInput: React.FC<SearchInputProps> = ({
	name = 'search',
	isInvalid,
	label,
	errorMessage,
	description,
	placeholder,
	onChange,
	onSubmit,
}) => {
	return (
		<SearchField name={name} isInvalid={isInvalid} onChange={onChange} onSubmit={onSubmit}>
			<Label>{label}</Label>
			<SearchField.Group>
				<SearchField.SearchIcon />
				<SearchField.Input placeholder={placeholder} />
				<SearchField.ClearButton />
			</SearchField.Group>
			{isInvalid ? (
				<FieldError>{errorMessage}</FieldError>
			) : (
				<Description>{description}</Description>
			)}
		</SearchField>
	)
}
