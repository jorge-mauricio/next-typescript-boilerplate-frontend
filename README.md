# NextJS / TypeScript Boilerplate - Frontend

## Install and Run
- Node version validated: v18.18.1 / npm v9.8.1
- Set compatible Node/NPM versions: `nvm use` 
**IMPORTANT:** When restoring the packages, use the `--legacy-peer-deps` flag, as while I was developing, I hadn't realized that I was working on an outdate version of node/npm.
- Install packages: `npm i --legacy-peer-deps`
- Run Next server and Mock API (json-server) in parallel: `npm run dev`
- Have fun!

## Development

### Tech Stack Overview
In order to carry out the React assessment, I selected Next.js framework, since I have always valued server side rendering, and it also saves some time with the automatic routing, since we were in a tight deadline.
I also opted to use TypeScript, since it's high in demand and I've been coding with it for the past year.
For CSS styling, I used Tailwind CSS, configured with SCSS and set up as a styled module. To serve the provided dataset, I chose json-server for its simplicity, avoiding the complexity of a full setup with MSW. To streamline running both servers with a single command, I utilized `concurrently` in combination with `wait-on`.

### Main design patterns used:
- **Layout Component Pattern:** I created a component that acts as a layout template, and any page component that uses it, is displayed with the same base structure. It's also dynamic enough for a project to contain multiple layout templates.

- **Compound Component Pattern:** The layout component uses React's built-in children prop, making it flexible to pass large chunks of contents, while still maintaining the main structure.

- **Custom Hook Pattern, with variant:** I just converted the useEffect into an importable to show how this kind of pattern would work.

- **Module Pattern:** styles.modules.scss

- **Observer Pattern and Lifting State Up:** Used by the filter component.

### Layout Theme:
- I ran AxeTool and adjusted a few element colors to pass the default scan.


## Further Reading
Below, I've listed a deeper context of patterns and standards that I defined for this assessment.

### Table of Contents
- [Development Server](/docs/development-environment.md)
- [CSS Architecture](/docs/css-architecture.md)
- [CSS Naming Convention](/docs/css-naming-convention)
- [CSS Performance Guidelines](/docs/css-performance-guidelines.md)
- [Linting and Code Style Guide](/docs/linting-and-code-style-guide.md)
- [E2E Testing](/docs/tests-e2e.md)  
