# Code Style Guide

## Project Structure

```
src/
  app/                    # Application bootstrap: router, entry point, global styles
    main.tsx
    Router.tsx
    index.css
    global.css
    normalize.css
  pages/                  # Feature-based page modules
    index.ts              # Barrel export
    layout/               # Layout feature
      layout.tsx
      layout.css
      index.ts
      components/         # Feature-scoped components
        index.ts
        header/
        sidebar/
        navbar/
    products-page/
      products-page.tsx
      index.ts
      components/
      utils/
  shared/                 # Shared, feature-agnostic code
    lib/
      router.ts
      index.ts
    ui/                   # Shared reusable UI primitives
      index.ts
      table/
      select/
      search-input/
```

### Key Principles

- **Feature-based organization** — code grouped by page/feature, not by type
- **Barrel exports** — every directory has `index.ts` re-exporting public API
- **Co-located components** — each component lives in its own folder with `index.ts`
- **CSS co-location** — component styles imported directly into the component file

### Path Aliases

```
@app      -> ./src/app
@pages    -> ./src/pages
@shared   -> ./src/shared
@widgets  -> ./src/widgets (planned)
@features -> ./src/features (planned)
```

---

## Naming Conventions

| Element             | Convention                 | Example                                   |
| ------------------- | -------------------------- | ----------------------------------------- |
| Components          | PascalCase                 | `Header`, `ThemeSwitcher`, `SearchInput`  |
| Component files     | kebab-case                 | `theme-switcher.tsx`, `search-input.tsx`  |
| Utility files       | camelCase                  | `pluralizeTovar.ts`                       |
| Interfaces          | PascalCase with `I` prefix | `ICategories`, `ISorting`, `IMocks`       |
| Type aliases        | PascalCase                 | `PageHeadingProps`, `SelectProps`         |
| Variables/functions | camelCase                  | `searchValue`, `resetFilters`             |
| Constants           | PascalCase export          | `ROUTER`                                  |
| Boolean props       | `is` prefix                | `isIconOnly`, `isInvalid`                 |
| Event handlers      | `on` prefix                | `onChange`, `onSubmit`, `onClick`         |
| Setters             | `set` prefix               | `setSearchValue`, `setTheme`              |
| CSS classes         | BEM-like                   | `.navbar__links-list`, `.header__wrapper` |

---

## Component Patterns

### Declaration

```tsx
// With props — use React.FC
export const Navlink: React.FC<NavlinkProps> = ({ children, to }) => {
	return <a href={to}>{children}</a>
}

// Without props — plain arrow function
export const Layout = () => {
	return <div>...</div>
}
```

### Props Types

```tsx
// Internal props — type alias
type PageHeadingProps = {
	productQuantity: number
	actionButtonSlot: React.ReactNode
}

// Exported API types — interface with I prefix
export interface ICategories {
	id: string
	label: string
}
```

### Generics

```tsx
type SelectProps<Items extends SelectItem> = {
	items: Items[]
	// ...
}

export const Select = <T extends SelectItem>({ items }: SelectProps<T>) => {
	// ...
}
```

### Slot Pattern

```tsx
type PageHeadingProps = {
	productQuantity: number
	actionButtonSlot: React.ReactNode
}
```

### Fragment Usage

```tsx
export const ProductsPage = () => {
	return (
		<>
			<PageHeading />
			<ProductFilters />
		</>
	)
}
```

---

## Import Ordering

1. External packages (third-party)
2. Internal path aliases (`@shared/...`)
3. Relative imports (`../...`, `./...`)
4. CSS imports last

```tsx
import type { Key } from '@heroui/react'
import { useState } from 'react'
import { CategorySelect, type ICategories } from '../category-select'
import { ROUTER } from '@shared/lib'
import { ChartBarBig, Package } from 'lucide-react'
import './navbar.css'
```

### Type Imports

- Use `import type` for type-only imports
- Inline type imports allowed: `import { CategorySelect, type ICategories } from '../category-select'`

### Alias Imports for Name Collisions

```tsx
import { Table as HTable } from '@heroui/react'
import { Select as HSelect, Label, ListBox } from '@heroui/react'
import { Avatar as HAvatar } from '@heroui/react'
```

---

## TypeScript Configuration

- **Target**: ES2023
- **JSX**: `react-jsx`
- **Strict mode**: enabled
- **verbatimModuleSyntax**: true (enforces `import type`)
- **noUnusedLocals**, **noUnusedParameters**: enabled
- **erasableSyntaxOnly**: enabled

### Common Patterns

```tsx
// as const for constant objects
export const ROUTER = {
	products: '/products',
	analytics: '/analytics',
} as const

// React.ReactNode for children (not imported ReactNode)
type NavlinkProps = {
	children: React.ReactNode
	to: string
}
```

---

## Styling

### Primary: Tailwind CSS v4

```tsx
<div className='flex justify-between items-center'>
<div className='px-6 py-2 text-3xl text-foreground font-semibold'>
<aside className='px-4 py-6 h-full flex flex-col justify-between'>
```

### Secondary: Plain CSS for complex layouts

```css
.navbar__links-item {
	&:hover {
		background: var(--accent);
	}
}
```

### Design Tokens

All theming via CSS custom properties in `global.css`:

- Colors: `--accent`, `--background`, `--foreground`, `--success`, `--warning`, `--danger`, `--muted`, `--surface`, `--separator`
- Color space: `oklch()`
- Border radius: `--radius`, `--field-radius`
- Font: `--font-sans: var(--font-inter)`

### Opacity Modifiers

```tsx
className = 'bg-foreground/5'
```

### Arbitrary Values

```tsx
className = 'min-w-36 w-fit'
```

### HeroUI Component Styling

- Style via props (`variant`, `color`, `size`) and Tailwind classes
- Do not override component internals
- Use compound component pattern:

```tsx
<HSelect>
	<Label>{label}</Label>
	<HSelect.Trigger>...</HSelect.Trigger>
	<HSelect.Popover>...</HSelect.Popover>
</HSelect>
```

---

## State Management

- **Primary**: `useState` for local component state
- **Theme**: HeroUI `useTheme` hook
- **Planned**: TanStack Query (server state), Zustand (global state)

```tsx
const [searchValue, setSearchValue] = useState<string>('')
const [category, setCategory] = useState<Key | null>(null)
const { resolvedTheme, setTheme } = useTheme('system')
```

---

## Code Formatting

| Setting        | Value |
| -------------- | ----- |
| printWidth     | 100   |
| tabWidth       | 2     |
| useTabs        | true  |
| semi           | false |
| singleQuote    | true  |
| jsxSingleQuote | true  |
| arrowParens    | avoid |
| trailingComma  | all   |

### Examples

```tsx
// No semicolons
export const Layout = () => {
	return <div>...</div>
}

// Single quotes everywhere
import { useState } from 'react'
className = 'flex gap-2'

// Arrow parens avoided
items.map(item => <SelectItem key={item.id} />)

// Tabs for indentation (visible as tab characters)
```

---

## Linting

- Tool: `oxlint` (Rust-based)
- Plugins: `typescript`, `unicorn`, `oxc`
- `no-console`: warn
- `typescript/no-explicit-any`: warn
- `no-unused-vars`: warn with `^_` pattern for intentional unused

---

## Language Conventions

- **Code identifiers**: English
- **User-facing strings**: Russian
- **Comments**: Russian

---

## Documentation Standards

- JSDoc for utility functions:

```tsx
/**
 * Returns the correct Russian plural form
 * @param n number
 * @param includeNumber boolean
 * @returns string
 */
export function pluralizeTovar(n: number, includeNumber: boolean = true) {
	// ...
}
```

- Types co-located with components
- Interfaces exported from component files
