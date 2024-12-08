### Development Environment

#### Available Scripts

##### Combined Development
```bash
# Start both Next.js and Mock API servers
npm run dev
```
- Concurrently runs both servers
- Next.js on port 3000
- Mock API on port 3001

##### Next.js Development Server
```bash
# Start development server
npm run next:dev
```
- Starts the Next.js development server on `http://localhost:3000`
- Page auto-updates as you edit files
- Shows detailed error messages in your browser

##### Mock API Server
```bash
# Start JSON Server (mock API)
npm run mock-api
```
- Serves mock API on `http://localhost:3001`
- Watches `src/mocks/db.json` for changes
- Provides RESTful API endpoints

##### Production Commands
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
- Mock API with JSON Server

#### Available URLs
- Main App: [http://localhost:3000](http://localhost:3000)
- Mock API: [http://localhost:3001](http://localhost:3001)
- Both servers will automatically find alternative ports if default ones are in use

#### Environment Configuration
Development server can be configured using environment variables:
```bash
# In .env.local
NEXT_PUBLIC_API_URL=http://localhost:3001  # Mock API URL
PORT=3005                                  # Change Next.js port
NODE_ENV=development
```

#### Troubleshooting Common Issues
1. **Port Conflicts**
   - Servers will automatically try the next available port
   - Or manually change ports in `.env.local`

2. **Changes not reflecting**
   - Ensure you've saved all files
   - Try clearing `.next` cache: `rm -rf .next`
   - Restart development servers
   - For API changes, ensure db.json is saved

3. **TypeScript/ESLint errors**
   - Fix reported issues before building
   - Use `npm run lint:fix` to auto-fix when possible

4. **API Connection Issues**
   - Verify JSON Server is running
   - Check correct ports in configuration
   - Ensure db.json is valid JSON
