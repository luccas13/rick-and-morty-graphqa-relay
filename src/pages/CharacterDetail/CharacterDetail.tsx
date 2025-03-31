import { PreloadedQuery, usePreloadedQuery } from "react-relay";
import { CharacterQuery } from "@/graphql/queries/CharacterQuery.graphql";
import { CharacterQuery as CharacterQueryTypes } from "@/relay";
import "./characterDetail.scss";
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
    <div className="character_detail_container">
      <div className="character_detail_image_container">
        <img
          src={data?.character?.image || undefined}
          alt={data?.character?.name || undefined}
          width={50}
        />
      </div>
      <div className="character_detail_information_container">
        <h2>{data?.character?.name}</h2>
        <p>Gender: {data?.character?.gender}</p>
        <p>Specie: {data?.character?.species}</p>
        <p>Status: {data?.character?.status}</p>
      </div>
      <Button className="character_detail_exit_btn" onClick={onClickClose}>
        Back
      </Button>
    </div>
  );
};
