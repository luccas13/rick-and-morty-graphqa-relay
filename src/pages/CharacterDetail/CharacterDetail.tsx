import { PreloadedQuery, usePreloadedQuery } from "react-relay";
import { CharacterQuery } from "@/graphql/queries/CharacterQuery.graphql";
import { CharacterQuery as CharacterQueryTypes } from "@/relay";
import { Button } from "@/components";

type Props = {
  queryReference: PreloadedQuery<CharacterQueryTypes>;
  onClickClose: () => void;
};
export const CharacterDetail = ({ queryReference, onClickClose }: Props) => {
  const data = usePreloadedQuery<CharacterQueryTypes>(
    CharacterQuery,
    queryReference
  );

  return (
    <div>
      <div>
        <img
          src={data?.character?.image || undefined}
          alt={data?.character?.name || undefined}
          width={50}
        />
      </div>
      <div>
        <h2>{data?.character?.name}</h2>
        <p>Gender: {data?.character?.gender}</p>
        <p>Specie: {data?.character?.species}</p>
        <p>Status: {data?.character?.status}</p>
      </div>
      <Button onClick={onClickClose}>Back</Button>
    </div>
  );
};
