## Setup complete monorepo

- npm init -y
- create pnpm-workspace.yaml file
PASTE: 
```js
packages:
  - "apps/*"
  - "packages/*"
```
- pnpm add -D lerna
- npx lerna init
- update root package.json
- create requires folders (apps, packages)
- install react
- `pnpm create vite apps/app-name --template react-ts`
- `pnpm install`
- create setup in UI package
- Create tsconfig.base.json at root and extend it in UI package
- Create typescript-config and files in packages
- verify: `pnpm --filter customer-portal build`
- create eslint-config and create package.json and react.js
- run `pnpm add -Dw eslint @eslint/js globals eslint-plugin-react-hooks eslint-plugin-react-refresh`
- run cmd `pnpm add @repo/eslint-config@workspace:* --filter customer-portal`
- run  `pnpm list eslint` to verify eslint and version
- If any css issues, create `apps/customer-portal/src/vite-env.d.ts` and paste `/// <reference types="vite/client" />`


## Jest and testing setup
- run `pnpm add -Dw jest jest-environment-jsdom ts-jest @types/jest @testing-library/react @testing-library/jest-dom @testing-library/user-event`
- create jest-config in packages and create its files
- pnpm add @repo/jest-config@workspace:* --filter customer-portal
- create `jest.config.cjs` in apps/customer-portal
- create test file
- run `pnpm --filter customer-portal test`

## Pipelines
- create CI file
- create sonarcloud project
- create `SONAR_TOKEN` in github secrets (214e16a2d507ac7cb1676275c3020891b4661db0)
- create `sonar-project.properties` at root
- create workflow `sonar.yml`
