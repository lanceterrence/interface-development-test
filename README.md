# Interface Development Test
____
_Tech stack used in this project_:
- **JavaScript Framework/Compiler:** React and TypeScript
- **React Framework**: Next.js
- **CSS Framework**: TailwindCSS
- **Build tool used**: Turbopack (Webpack's successor made with Rust)
- **Module**: ES5
- 

### Reasoning for the tech stack
- Since we are going to develop a static site, I've decided to pick Next.js for this one. As it supports server side rendering which is static site regeneration. This is best for static websites that doesn't change that often.
- TailwindCSS is really a great tool for creating sites in a short amount of time. It is also maintainable.

### Installation
1. Install the dependencies first by simply running:
   ```bash
   npm run install
   # for yarn users
   yarn install
    ```
2. Run locally by running:
    ```bash
   npm run dev 
   ```