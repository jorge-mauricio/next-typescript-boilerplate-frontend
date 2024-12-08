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
