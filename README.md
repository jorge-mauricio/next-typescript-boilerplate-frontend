# Software Mind - Assessment Project

## Development

### Development Server

#### Available Scripts

In the project directory, you can run:

```bash
# Start development server
npm run dev
```
- Starts the development server on `http://localhost:3000`
- Page auto-updates as you edit files
- Shows detailed error messages in your browser

```bash
# Build for production
npm run build
```
- Creates an optimized production build in `.next` folder
- Includes automatic bundle optimization
- Generates static HTML for supported pages

```bash
# Start production server
npm run start
```
- Runs the built app in production mode
- Must run `build` first
- Used to test production deployment

#### Development Mode Features
- Hot Module Replacement (HMR)
- Fast Refresh for React components
- Error reporting overlay
- Source maps for debugging
- TypeScript type checking
- ESLint error checking
- Tailwind CSS class autocompletion

#### Available URLs
- Main: [http://localhost:3000](http://localhost:3000)
- Development server typically runs on port 3000, but will automatically find another port if 3000 is in use

#### Environment Configuration
Development server can be configured using environment variables:
```bash
# In .env.local
PORT=3005          # Change development server port
NODE_ENV=development
```

#### Troubleshooting Common Issues
1. **Port already in use**
   - Server will automatically try the next available port
   - Or manually change port in `.env.local`

2. **Changes not reflecting**
   - Ensure you've saved all files
   - Try clearing `.next` cache: `rm -rf .next`
   - Restart development server

3. **TypeScript/ESLint errors**
   - Fix reported issues before building
   - Use `npm run lint:fix` to auto-fix when possible
  
### CSS Architecture

This project uses a mixed approach for styling, combining Tailwind CSS with CSS Modules. This provides the flexibility of utility classes while maintaining component-scoped styles when needed.

#### Structure

```
src/
├── styles/                    # Global styles and theme
│   ├── globals.css           # Global styles and Tailwind imports
│   └── theme/                # Theme-specific styles
│       ├── colors.css
│       └── typography.css
│
└── components/
    └── listings/
        └── ListingCard/      # Component with local styles
            ├── index.tsx
            └── styles.module.scss  # Scoped styles for the component
```

#### Using Sass with CSS Modules

To use Sass, first install the required dependency:
```bash
npm install -D sass
```

Then you can use either `.module.css` or `.module.scss`:
```scss
// styles.module.scss
.container {
  @apply bg-white p-4;  // Tailwind classes

  // Sass nesting
  .title {
    @apply text-lg;

    &:hover {
      @apply text-blue-600;
    }
  }
}
```

#### Styling Approaches

1. **Tailwind Only**
   ```tsx
   const SimpleComponent = () => (
     <div className="bg-white p-4 rounded-lg shadow-md">
       <h2 className="text-xl font-bold">Title</h2>
     </div>
   );
   ```

2. **CSS Modules Only**
   ```tsx
   import styles from './styles.module.scss';

   const ModuleComponent = () => (
     <div className={styles.container}>
       <h2 className={styles.title}>Title</h2>
     </div>
   );
   ```

3. **Mixed Approach (Recommended)**
   ```tsx
   import styles from './styles.module.scss';

   const MixedComponent = () => (
     <div className={`${styles.container} p-4 hover:shadow-lg`}>
       <h2 className={styles.title}>Title</h2>
     </div>
   );
   ```

#### Best Practices

1. **When to Use Global Styles**
   - Theme variables
   - Base element styles
   - Utility classes used across many components
   - Common animations

2. **When to Use CSS Modules**
   - Component-specific layouts
   - Complex component states
   - Custom animations
   - Component-specific themes

3. **When to Use Tailwind**
   - Quick prototyping
   - Simple styling needs
   - Responsive design
   - Common utilities

#### Using with Tailwind

CSS Modules can use Tailwind's `@apply` directive:

```scss
// styles.module.scss
.button {
  @apply px-4 py-2 rounded-md;

  &.primary {
    @apply bg-blue-500 text-white;

    &:hover {
      @apply bg-blue-600;
    }
  }
}
```

#### Tips for Mixed Usage

1. **Combining Classes**
   ```tsx
   import cn from 'classnames';  // Install classnames package

   const Component = () => (
     <div className={cn(
       styles.container,
       'p-4',
       { [styles.active]: isActive }
     )}>
       Content
     </div>
   );
   ```

2. **Media Queries**
   ```scss
   .container {
     @apply p-4;

     @screen md {
       @apply p-6;
     }

     @screen lg {
       @apply p-8;
     }
   }
   ```

3. **CSS Variables**
   ```scss
   :root {
     --component-spacing: 1rem;
   }

   .container {
     padding: var(--component-spacing);
   }
   ```

#### Processing and Build

- CSS Modules are processed at build time
- Class names are hashed for scoping
- Sass is compiled to CSS
- PostCSS processes Tailwind directives
- All styles are optimized and minified for production

To enable Sass processing in your Next.js project:

```javascript
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: ['./src'],
  },
};

module.exports = nextConfig;
```

### CSS Naming Convention

This project uses CSS Modules with Kebab Case naming convention for better readability and maintainability.

#### Basic Naming Pattern
- Use all lowercase
- Words separated by single hyphens
- Component name as prefix
- Descriptive suffixes for elements

```scss
// styles.module.scss
.listing-card { }
.listing-card-image { }
.listing-card-title { }
```

```tsx
import styles from './styles.module.scss';

const ListingCard = () => (
  <div className={styles['listing-card']}>
    <img className={styles['listing-card-image']} />
    <h2 className={styles['listing-card-title']}>Title</h2>
  </div>
);
```

#### State Classes
States are prefixed with `is-` or `has-`:
```scss
.listing-card {
  &.is-active { }
  &.is-disabled { }
  &.has-error { }
}

// Usage with conditional classes
.listing-card-input {
  &.has-error {
    @apply border-red-500;
  }
}
```

```tsx
import cn from 'classnames';

const ListingCard = ({ isActive, hasError }) => (
  <div className={cn(
    styles['listing-card'],
    isActive && styles['is-active'],
    hasError && styles['has-error']
  )}>
);
```

#### Variants
Variants use descriptive suffixes:
```scss
.button-primary { }
.button-secondary { }
.listing-card-compact { }
.listing-card-expanded { }
```

#### Layout Classes
Prefix with `l-` for layout-specific styles:
```scss
.l-listing-grid { }
.l-sidebar { }
.l-main-content { }
```

#### Examples

```scss
// listings/styles.module.scss
.listing-card {
  @apply bg-white rounded-lg shadow-md;

  &.is-featured {
    @apply border-2 border-blue-500;
  }

  &.is-sold {
    @apply opacity-75;
  }
}

.listing-card-image {
  @apply w-full h-48 object-cover;

  &.has-error {
    @apply border-red-500;
  }
}

.listing-card-content {
  @apply p-4;
}

.l-listing-grid {
  @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6;
}
```

#### Best Practices

1. **Component Prefixing**
   - Always prefix classes with component name
   - Helps maintain scope and prevents conflicts
   ```scss
   .listing-card { }        // ✓ Good
   .card { }                // ✗ Bad (too generic)
   ```

2. **State Naming**
   - Use `is-*` for states
   - Use `has-*` for containment
   ```scss
   .is-active { }          // ✓ Good
   .active { }             // ✗ Bad
   ```

3. **Nesting**
   - Limit nesting to 3 levels max
   - Use parent selector `&` for states
   ```scss
   .listing-card {
     &.is-featured { }     // ✓ Good
     .deep .nesting { }    // ✗ Bad
   }
   ```

4. **Media Queries**
   - Use Tailwind breakpoints when possible
   - Keep responsive styles with their base styles
   ```scss
   .listing-card {
     @apply p-4;
     @screen md {
       @apply p-6;
     }
   }
   ```

#### Common Patterns

```scss
// Component base
.listing-card { }

// Component elements
.listing-card-image { }
.listing-card-title { }

// States
.is-active { }
.is-disabled { }
.has-error { }

// Variants
.listing-card-compact { }
.listing-card-expanded { }

// Layout
.l-listing-grid { }
.l-listing-sidebar { }
```

### CSS Performance Guidelines

#### CSS Modules Performance

1. **Bundle Size**
- Keep component-specific styles in CSS Modules
- Use Tailwind for utilities and common patterns
- Avoid large global CSS files
- Use dynamic imports for large components with styles
```typescript
// Large component with styles
const LargeComponent = dynamic(() => import('./LargeComponent'));
```

2. **Class Generation**
```typescript
// ❌ Avoid - Recalculating on each render
const cardClasses = `${styles['listing-card']} ${isActive ? styles['is-active'] : ''}`;

// ✅ Better - Memoize complex combinations
const cardClasses = useMemo(() => 
  `${styles['listing-card']} ${isActive ? styles['is-active'] : ''}`,
  [isActive]
);
```

3. **Style Reuse**
```scss
// ❌ Avoid duplicating Tailwind utilities
.listing-card {
  @apply bg-white rounded-lg p-4;
}

// ✅ Better - Use Tailwind classes directly
<div className={`${styles['listing-card']} bg-white rounded-lg p-4`}>
```

#### Server Components
```typescript
// ✅ Static class names work well
import styles from './styles.module.scss';

// ❌ Avoid dynamic class names in server components
```

#### Development vs Production
- Development: Human-readable class names
- Production: Minified, hashed classes
- Always test performance in production builds

#### Quick Tips
- Use Chrome DevTools Coverage tab to find unused CSS
- Monitor Network tab for CSS chunk loading
- Check bundle analyzer for CSS size in chunks
- Leverage browser caching for compiled CSS
- Keep styles modular and specific to components

#### Best Practices Checklist
- [ ] Component-specific styles in CSS Modules
- [ ] Common utilities via Tailwind
- [ ] Memoized complex class combinations
- [ ] Dynamic imports for large components
- [ ] Regular bundle size monitoring
- [ ] Production build testing
  
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
