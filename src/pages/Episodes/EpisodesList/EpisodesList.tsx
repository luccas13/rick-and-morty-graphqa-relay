import { useLazyLoadQuery } from "react-relay";
import { EpisodesQuery } from "@/graphql/queries/EpisodesQuery.graphql";
import {} from "@/relay";
import { startTransition, useState } from "react";
import { Button, Card, CardTitle, List } from "@/components";
import {
  EpisodesQuery as EpisodesQueryType,
  EpisodesQuery$variables as FilterTypes,
} from "@/relay/__generated__/EpisodesQuery.graphql";

const DEFAULT_PARAMS = { page: 1 };

export const EpisodesList = () => {
  const [params, setParams] = useState<FilterTypes>(DEFAULT_PARAMS);

  const data = useLazyLoadQuery<EpisodesQueryType>(
    EpisodesQuery,
    {
      ...params,
    },
    { fetchPolicy: "store-or-network" }
  );

  const onChangePrev = () => {
    if (!data || !data.episodes?.info?.prev) return;
    startTransition(() => {
      setParams((preValue) => ({ ...preValue, page: preValue.page - 1 }));
    });
  };

  const onChangeNext = () => {
    if (!data || !data.episodes?.info?.next) return;
    startTransition(() => {
      setParams((preValue) => ({ ...preValue, page: preValue.page + 1 }));
    });
  };

  return (
    <main className="flex flex-col gap-12 py-5 h-95/100 justify-between">
      <div className="flex flex-col gap-4 text-center h-full justify-between">
        <h2 className="text-2xl font-black text-primary sm:text-5xl">
          Episodes
        </h2>
        <div className="flex flex-wrap justify-center gap-2 h-85/100 overflow-auto">
          {data.episodes?.results &&
            data.episodes.results.map((episode) => (
              <Card key={episode?.id} className="hover:cursor-pointer">
                <CardTitle className="text-xl">
                  <h3>{episode?.episode}</h3>
                  <h2>{episode?.name}</h2>
                  <h3>{episode?.air_date}</h3>
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
