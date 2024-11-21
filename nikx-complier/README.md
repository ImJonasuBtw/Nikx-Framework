# ts-template-node

A template to be used as a **TypeScript Node application**.  

## Includes

* NPM configuration (basically, the contents of our old trusty `package.json`)
* TypeScript configuration (configured in `tsconfig.json`)
* Jest setup (configured in `jest.config.js`; tests are executed using `npm run test`)
* ESLint (configured in `.eslintrc.json`)
  * Recommended VSCode setup is to use the ESLint plugin with these (global or project-specific) settings:
    ```
    ...
    "editor.codeActionsOnSave": {
        "source.organizeImports": true,
        "source.fixAll.eslint": true,
        "source.fixAll": true,
    },
    ...
    ```
