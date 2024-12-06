# Software Mind - Assessment Project

## Development

### Linting and Code Style Guide

#### Setup Overview

This project uses ESLint with the Airbnb configuration and Prettier for code formatting. The setup includes:

- ESLint for code quality and style enforcement
- Airbnb's ESLint configuration
- TypeScript-specific ESLint rules
- Prettier for consistent code formatting
- Next.js specific linting rules

#### Available Commands

##### Understanding Linting vs Formatting

`npm run format:file` (Prettier):

- Handles code formatting only
- Fixes things like:
  - Indentation
  - Line spacing
  - Quote styles
  - Semicolons
  - Line length
  - Trailing commas
- Cannot fix logical or structural issues
- Only cares about how the code looks

`npm run lint:file` (ESLint):

- Handles both code quality and formatting
- Checks for and can fix:
  - Syntax errors
  - Best practices
  - Potential bugs
  - Unused variables
  - Import ordering
  - React/TypeScript specific rules
- Can also enforce architectural decisions
- Some issues it finds need manual fixes

Recommended workflow:

1. First use `lint:file` to identify and fix code quality issues
2. Then use `format:file` to ensure consistent formatting
3. Or use the combined command: `npm run lint:format:file src/components/MyComponent.tsx`

##### Check All Files

```bash
# Run ESLint on all TypeScript/React files
npm run lint                     # Checks all files
npm run lint src/components/     # Checks specific directory
npm run lint src/components/MyComponent.tsx  # Checks specific file

# Fix automatically fixable issues
npm run lint:fix                 # Fixes all files
npm run lint:fix src/components/ # Fixes specific directory
npm run lint:fix src/components/MyComponent.tsx  # Fixes specific file

# Check formatting with Prettier
npm run format:check                     # Checks all files
npm run format:check src/components/     # Checks specific directory
npm run format:check src/components/MyComponent.tsx  # Checks specific file

# Format all files with Prettier
npm run format                     # Formats all files
npm run format src/components/     # Formats specific directory
npm run format src/components/MyComponent.tsx  # Formats specific file

# Combined lint and format
npm run lint:format               # Lint and format all files
npm run lint:format:file src/components/MyComponent.tsx  # Lint and format specific file
```

##### Alternative Individual File Commands

```bash
# Using npx directly
npx eslint path/to/your/file.tsx         # Lint specific file
npx eslint path/to/your/file.tsx --fix   # Fix specific file
npx prettier path/to/your/file.tsx --write  # Format specific file

# Examples
npx eslint src/components/MyComponent.tsx
npx eslint src/components/MyComponent.tsx --fix
npx prettier src/components/MyComponent.tsx --write
```

Both approaches (`npm run` and `npx`) will work for individual files. Use whichever you find more convenient.

##### Examples

```bash
# Lint a specific component
npx eslint src/components/MyComponent.tsx

# Fix a specific component
npx eslint src/components/MyComponent.tsx --fix

# Format a specific component
npx prettier src/components/MyComponent.tsx --write

# Lint all files in a specific directory
npx eslint src/components/**/*.tsx

# Format all files in a specific directory
npx prettier "src/components/**/*.{ts,tsx}" --write
```

#### Key Linting Rules

The configuration enforces:

- Airbnb's React/TypeScript style guide
- Consistent use of single quotes
- No unused variables or imports
- React hooks rules
- Proper TypeScript types
- Consistent spacing and formatting
- Import ordering
- No console.log statements (warns if used)

#### IDE Integration

For the best development experience, install ESLint and Prettier extensions in your IDE:

##### VS Code

1. Install "ESLint" extension
2. Install "Prettier - Code formatter" extension
3. Set Prettier as default formatter
4. Enable format on save (optional but recommended)

Settings (`settings.json`):

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  }
}
```

#### Common Issues and Solutions

##### Fix All Linting Issues

To fix all automatically fixable issues in the project:

```bash
npm run lint:fix && npm run format
```

##### Disable Specific Rules

In special cases, you can disable specific rules in a file:

```typescript
// Disable for entire file
/* eslint-disable react/jsx-props-no-spreading */

// Disable for next line only
// eslint-disable-next-line no-console
console.log('Debug info');

// Disable for specific section
/* eslint-disable */
// Your code here
/* eslint-enable */
```

Note: Use rule disabling sparingly and only when absolutely necessary.

#### Configuration Files

The linting setup is controlled by the following configuration files:

- `.eslintrc.js`: ESLint configuration
- `.prettierrc`: Prettier configuration
- `tsconfig.json`: TypeScript configuration

Check these files for specific rules and settings.
