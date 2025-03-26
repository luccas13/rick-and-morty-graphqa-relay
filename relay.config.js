module.exports = {
  src: "./src", // Carpeta donde están los archivos con consultas GraphQL
  schema: "./schema.graphql", // Ruta al archivo con el esquema de GraphQL
  exclude: ["**/node_modules/**", "**/__mocks__/**", "**/__generated__/**"],
  language: "typescript", // Puede ser "javascript" o "typescript"
  artifactDirectory: "./src/relay/__generated__", // Carpeta donde Relay guardará los archivos generados
};
