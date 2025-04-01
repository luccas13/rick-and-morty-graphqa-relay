import { useLazyLoadQuery } from "react-relay";
import { CharactersQuery } from "@/graphql/queries/CharactersQuery.graphql";
import {
  CharactersQuery as CharactersQueryTypes,
  CharactersQuery$variables as FilterTypes,
} from "@/relay";
import { startTransition } from "react";
import "./characters.scss";
import { Button } from "@/components";

type Props = {
  params: FilterTypes;
  onClickDetail: (id: string) => void;
  onChangeParams: (updateFn: (preValue: FilterTypes) => FilterTypes) => void;
};
export const Characters = ({
  params,
  onChangeParams,
  onClickDetail,
}: Props) => {
  const data = useLazyLoadQuery<CharactersQueryTypes>(
    CharactersQuery,
    {
      ...params,
    },
    { fetchPolicy: "store-or-network" }
  );

  const onChangePrev = () => {
    if (!data || !data.characters?.info?.prev) return;
    startTransition(() => {
      onChangeParams((preValue) => ({ ...preValue, page: preValue.page - 1 }));
    });
  };

  const onChangeNext = () => {
    if (!data || !data.characters?.info?.next) return;
    startTransition(() => {
      onChangeParams((preValue) => ({ ...preValue, page: preValue.page + 1 }));
    });
  };

  const onClickImage = (id: string | null | undefined) => {
    if (!id) return;
    onClickDetail(id);
  };

  return (
    <div className="characters_container">
      <h2 className="characters_title">Characters</h2>
      <div className="characters_list_container">
        {data.characters?.results &&
          data.characters.results.map((character) => (
            <div className="characters_list_item" key={character?.id}>
              <img
                className="w-auto h-9/10"
                src={character?.image || undefined}
                alt={character?.name || undefined}
                onClick={() => onClickImage(character?.id)}
              />
              <p>{character?.name}</p>
            </div>
          ))}
      </div>
      <div className="filter_container">
        <Button onClick={onChangePrev}>Prev</Button>
        <Button onClick={onChangeNext}>Next</Button>
      </div>
    </div>
  );
};
