import { Environment, Network, RecordSource, Store } from "relay-runtime";

// Definir la función para realizar las solicitudes de red
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const fetchQuery = async (operation: any, variables: any) => {
  const response = await fetch("https://rickandmortyapi.com/graphql", {
    // Aquí va la URL de tu servidor GraphQL
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  });
  return await response.json(); // Devuelve la respuesta como JSON
};

// Crear el entorno de Relay
const environment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource()),
});

export default environment;
