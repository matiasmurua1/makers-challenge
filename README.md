# Introducción

# MakersPay - Login Automation
Proyecto de automatización E2E del módulo Login utilizando Cypress.
Se implementa Page Object Model y estructura BDD con Cucumber.

# Índice

- [Cómo Comenzar](#cómo-comenzar)
- [Prerrequisitos](#prerrequisitos)
- [Instalación de dependencias](#instalación-de-dependencias)
- [Ejecución de tests](#ejecución-de-tests)
- [Scripts relevantes del `package.json`](#scripts-relevantes-del-packagejson)
- [Plugins recomendados](#plugins-recomendados)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Spec pattern y preprocesador](#spec-pattern-y-preprocesador)
- [Recursos utiles](#recursos-utiles)
- [Decisiones tecnicas](#decisiones-tecnicas)

# Cómo Comenzar

## Prerrequisitos

- Node.js v18+
- npm v9+

## Instalación de dependencias

Clona el repositorio y desde la raíz del proyecto ejecuta:

```bash
npm install
```

Esto instalará `cypress`, el preprocesador de Cucumber y demás dependencias listadas en `package.json`.

## Ejecución de tests

Comandos principales disponibles (definidos en `package.json`):

```bash
npm run test         # ejecuta cypress en modo headless (cypress run)
npm run test:open    # abre la UI de Cypress (cypress open)
```

### Scripts relevantes del `package.json`

- `test`: ejecuta `cypress run`.
- `test:open`: ejecuta `cypress open`.

## Plugins recomendados

- Cucumber (Gherkin) Full Support: `alexkrechik.cucumberautocomplete`
- Cypress Helper / Snippets: `shelex.vscode-cy-helper`, `andrew-codes.cypress-snippets`
- ESLint: `dbaeumer.vscode-eslint`
- Prettier: `esbenp.prettier-vscode`
- GitLens: `eamodio.gitlens`

## Estructura del proyecto

Carpetas principales relevantes:

- `cypress/features/`: archivos `.feature` en Gherkin (tests).
- `cypress/steps_definitions/`: definiciones de pasos (JS/TS) por feature.
- `cypress/pages/`: page objects (locators y helpers de UI).
- `cypress/support/`: comandos y utilidades compartidas.

Ejemplo en este repo:

- `cypress/features/frontend/login.feature` — escenarios de login.
- `cypress/steps_definitions/frontend/login.js` — implementación de Given/When/Then.
- `cypress/pages/loginPage.js`, `cypress/pages/homePage.js` — page objects.

## Spec pattern y preprocesador

La configuración de Cypress usa `specPattern: "cypress/features/**/*.feature"` y el preprocesador de Cucumber (`@badeball/cypress-cucumber-preprocessor`) combinado con `esbuild`.

Archivo de configuración relevante: `cypress.config.js`.


# Recursos útiles

- Cypress: https://docs.cypress.io
- Cucumber / Gherkin: https://cucumber.io/docs/gherkin/reference/

# Decisiones tecnicas
- Uso de POM para facilar el mantenimiento del codigo.
- Uso de examples en feature para poder utilizar mas de un usuario por escenario de prueba.
- Parametrizacion de steps: se busco realizar la parametrizacion de steps para que sean reautilizabes y poder utilizarlos en diferentes escenarios donde se los requiera.

AUTOR: MURUA MARTINEZ MATIAS NAHUEL  
Email: murua.matias.96@gmail.com  
Versión: 1.0.0 - Febrero 2026