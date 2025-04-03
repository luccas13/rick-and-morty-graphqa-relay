import { useLazyLoadQuery } from "react-relay";
import { CharactersQuery } from "@/graphql/queries/CharactersQuery.graphql";
import {
  CharactersQuery as CharactersQueryTypes,
  CharactersQuery$variables as FilterTypes,
} from "@/relay";
import { startTransition, useState } from "react";
import { Button, Card, CardImage, CardTitle, List } from "@/components";
import { useNavigate } from "react-router";

const DEFAULT_PARAMS = { page: 1 };

export const CharactersList = () => {
  const navigate = useNavigate();
  const [params, setParams] = useState<FilterTypes>(DEFAULT_PARAMS);

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
      setParams((preValue) => ({ ...preValue, page: preValue.page - 1 }));
    });
  };

  const onChangeNext = () => {
    if (!data || !data.characters?.info?.next) return;
    startTransition(() => {
      setParams((preValue) => ({ ...preValue, page: preValue.page + 1 }));
    });
  };

  const onClickImage = (id: string | null | undefined) => {
    if (!id) return;
    navigate(`/characters/${id}`);
  };

  return (
    <main className="flex flex-col gap-12 py-5 h-9/10 justify-between">
      <div className="flex flex-col gap-4 text-center h-full justify-between">
        <h2 className="text-2xl font-black text-primary sm:text-5xl">
          Characters
        </h2>
        <div className="flex flex-wrap justify-center gap-2 h-7/10 overflow-auto">
          {data.characters?.results &&
            data.characters.results.map((character) => (
              <Card
                key={character?.id}
                onClick={() => onClickImage(character?.id)}
                className="hover:cursor-pointer"
              >
                <CardImage
                  src={character?.image || undefined}
                  alt={character?.name || undefined}
                />
                <CardTitle className="text-xl">
                  <h2>{character?.name}</h2>
                </CardTitle>
              </Card>
            ))}
        </div>
        <List direction="horizontal" className="w-full justify-center">
          <Button className="hover:cursor-pointer" onClick={onChangePrev}>
            Prev
          </Button>
          <Button className="hover:cursor-pointer" onClick={onChangeNext}>
            Next
          </Button>
        </List>
      </div>
    </main>
  );
};
