module.exports = {
  env: {
    browser: true, // El entorno es un navegador, por lo que ESLint debe asumir que las variables globales del navegador (como window, document, etc.) están presentes
    es2021: true, // Se utiliza la sintaxis de ECMAScript 2021.
  },
  globals: {
    React: true, // ESLint reconocerá React como una variable global.
    JSX: true, // Similarmente, ESLint reconocerá JSX como una variable global.
  },
  settings: {
    react: {
      version: "detect", // Automáticamente detecta la versión de React que se está utilizando en el proyecto.
    },
  },
  overrides: [
    {
      files: ["./**/*.ts", "./**/*.tsx"], // Aplica las siguientes reglas solo a los archivos TypeScript (.ts y .tsx).
      rules: {
        "no-use-before-define": "off", // Desactiva la regla no-use-before-define de ESLint.
        "no-unused-vars": "off", // Desactiva la regla no-unused-vars de ESLint.
        "@typescript-eslint/no-use-before-define": ["error"], // Activa la regla correspondiente de TypeScript.
        "@typescript-eslint/no-unused-vars": ["error"], // Activa la regla correspondiente de TypeScript.
      },
    },
    {
      env: {
        "jest/globals": true, // Define que el entorno de pruebas es Jest.
      },
      files: ["./**/*.spec.ts", "./**/*.spec.tsx"], // Aplica esta configuración solo a los archivos de pruebas (.spec.ts y .spec.tsx).
      plugins: ["jest"], // Activa el plugin de Jest.
    },
  ],
  extends: // Extiende configuraciones predefinidas de ESLint y plugins.
    [
        "plugin:react/recommended", // Reglas recomendadas para React
        "standard", // Conjunto de reglas de JavaScript Standard Style
        "prettier" // Integra Prettier con ESLint para evitar conflictos de reglas de formato.
    ], 
  parser: "@typescript-eslint/parser", //  Utiliza el parser de TypeScript para ESLint
  parserOptions: { // Opciones de configuración para el parser.
    ecmaFeatures: { 
      jsx: true, // Habilita el soporte para JSX.
    },
    ecmaVersion: 12, // Utiliza las características de ECMAScript 2021.
    sourceType: "module", // Permite el uso de módulos de ECMAScript.
  },
  plugins: // Plugins adicionales utilizados por ESLint.
    [
        "react", // Plugin para linting de React.
        "@typescript-eslint", //  Plugin para linting de TypeScript.
        "jsx-a11y" // Plugin para accesibilidad en JSX.
    ],
  rules: { // Define reglas específicas de ESLint.
    "import/order": [ // Enforcea un orden específico de los import
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
          "type",
        ],
      },
    ],
    "react/prop-types": "off", // Desactiva la validación de prop-types en React
    "react/jsx-filename-extension": [1, { extensions: [".tsx"] }], //  Permite JSX solo en archivos con extensión .tsx
    "no-unneeded-ternary": ["error"], // Prohíbe el uso innecesario de operadores ternarios.
    indent: ["error", 2], // Enforcea una indentación de 2 espacios.
  },
  ignorePatterns: // Define patrones de archivos que ESLint debe ignorar.
    ["./coverage", "./dist"], // Ignora los directorios coverage y dist.
};
