import { useLazyLoadQuery } from "react-relay";
import { CharacterQuery } from "@/graphql/queries/CharacterQuery.graphql";
import { CharacterQuery as CharacterQueryTypes } from "@/relay";
import { useParams } from "react-router";
import { Card, CardImage, Specs, CardTitle } from "@/components";
import { useMemo } from "react";

export const CharacterDetail = () => {
  const { id = "" } = useParams();

  const data = useLazyLoadQuery<CharacterQueryTypes>(
    CharacterQuery,
    {
      id: id,
    },
    { fetchPolicy: "store-or-network" }
  );

  const specs = useMemo(
    () => [
      { title: "Gender", value: data?.character?.gender },
      { title: "Specie", value: data?.character?.species },
      { title: "Status", value: data?.character?.status },
    ],
    [data]
  );

  return (
    <main className="w-full h-full flex justify-center gap-10">
      <Card className="h-9/10">
        <CardTitle className="text-5xl font-black text-primary sm:text-5xl text-center">
          {data.character?.name}
        </CardTitle>
        <CardImage
          className="h-9/10"
          src={data?.character?.image || undefined}
          alt={data?.character?.name || undefined}
        />
      </Card>
      <Specs specs={specs} />
    </main>
  );
};
