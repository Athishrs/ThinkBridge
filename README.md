ThinkBridge - WEB APP: DISHCOVERY

This project is an enhanced redesign inspired by the original recipe-finding platform MyFridgeFood.
Our team used the site as a reference point to identify usability issues, visual design limitations, and feature opportunities, which informed our improved prototype and final implementation.

Original Source:
https://www.myfridgefood.com/


🚀 Getting Started

To install dependencies:
  npm i

To start the development server:
  npm run dev


⚛️ React + Vite

This project uses React with Vite, offering fast bundling, HMR, and an optimized developer experience.

Included React Plugins

@vitejs/plugin-react – Uses Babel or OXC for Fast Refresh

@vitejs/plugin-react-swc – Uses SWC for high-performance Fast Refresh


🧩 React Compiler

The React Compiler is not enabled due to performance impact in development and build.
If needed, reference the official documentation:

https://react.dev/learn/react-compiler/installation


🛠️ ESLint Configuration

For larger production applications, TypeScript with type-aware ESLint rules is recommended.
See the official Vite + React + TS template:

https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts


✔️ Quality Assurance & Design Validation

This project underwent iterative QA cycles to ensure:
- Accurate alignment with the Figma prototype
- Consistent layout, spacing, and color usage
- Responsive behavior across breakpoints
- Smooth user interactions and predictable UX patterns
- Feedback from these tests guided refinements and improved prototype fidelity.


⚠️ Missing Features from Prototype

The following prototype features were not fully implemented in the final build:

Recipe Card
- Share Link
  - Not implemented due to permission and integration limitations.
- Serving Size Adjustments Saved to Profile
  - Not implemented because the profile system does not include persistence logic for this feature.

Sign In
- Forgot Password
  - Not implemented; full account recovery is outside the scope of this authentication setup.
