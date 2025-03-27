declare module "react-relay" {
  import { Environment, graphql } from "relay-runtime";
  // Importa el tipo necesario de relay-runtime

  export const RelayEnvironmentProvider: React.FC<{
    environment: Environment;
    children: ReactNode;
  }>;

  export function useLazyLoadQuery<T extends GraphQLTaggedNode>(
    query: T,
    variables: T extends { variables: infer V } ? V : Record<string, unknown>,
    options?: { fetchPolicy?: "store-or-network" | "network-only" }
  ): T extends { response: infer R } ? R : Record<string, unknown>;

  export { graphql };
  // Otros componentes o funciones que quieras agregar
}
