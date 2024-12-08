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
