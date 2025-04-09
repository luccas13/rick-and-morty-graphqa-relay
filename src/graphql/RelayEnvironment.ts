import { patchIds } from "@/utils";
import { Environment, Network, RecordSource, Store } from "relay-runtime";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const fetchQuery = async (operation: any, variables: any) => {
  // URL del servidor GraphQL
  const response = await fetch("https://rickandmortyapi.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  });
  const json = await response.json(); // Devuelve la respuesta como JSON
  const patched = patchIds(json); // Patch de id únicos para el cache de datos con relay
  return patched;
};

// Entorno de Relay
const environment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource()),
});

export default environment;
