import { useLazyLoadQuery } from "react-relay";
import { CharacterQuery } from "@/graphql/queries/CharacterQuery.graphql";
import { CharacterQuery as CharacterQueryTypes } from "@/relay";
import { useParams } from "react-router";
import { CharacterDetailCard } from "../components/CharacterDetailCard/CharacterDetailCard";

export const CharacterDetail = () => {
  const { id = "" } = useParams();

  const data = useLazyLoadQuery<CharacterQueryTypes>(
    CharacterQuery,
    {
      id: id,
    },
    { fetchPolicy: "store-or-network" }
  );

  return (
    data.character && <CharacterDetailCard characterRef={data.character} />
  );
};
