import { useParams } from "react-router";
import { EpisodeDetailCard } from "../Components/EpisodeDetailCard/EpisodeDetailCard";
import { useLazyLoadQuery } from "react-relay";
import { EpisodeQuery } from "@/graphql/queries/EpisodeQuery.graphql";
import { EpisodeQuery as EpisodeQueryType } from "@/relay/__generated__/EpisodeQuery.graphql";

export const EpisodeDetail = () => {
  const { id = "" } = useParams();

  const data = useLazyLoadQuery<EpisodeQueryType>(
    EpisodeQuery,
    {
      id: id,
    },
    { fetchPolicy: "store-or-network" }
  );

  return data?.episode && <EpisodeDetailCard episodeRef={data?.episode} />;
};
