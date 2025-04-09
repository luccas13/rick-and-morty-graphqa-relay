import { Card, CardImage, CardTitle, Specs } from "@/components";
import { graphql, useFragment } from "react-relay";
import { CharacterDetailCardFragment$key } from "@/relay/__generated__/CharacterDetailCardFragment.graphql";
import { useMemo } from "react";

type Props = {
  characterRef: CharacterDetailCardFragment$key;
};
export const CharacterDetailCard = ({ characterRef }: Props) => {
  const data = useFragment(
    graphql`
      fragment CharacterDetailCardFragment on Character {
        name
        status
        species
        type
        gender
        location {
          name
        }
        episode {
          name
        }
        image
      }
    `,
    characterRef
  );

  const specs = useMemo(
    () => [
      { title: "Gender", value: data?.gender },
      { title: "Specie", value: data?.species },
      { title: "Status", value: data?.status },
    ],
    [data]
  );
  console.log("🚀 ~ CharacterDetailCard ~ data:", data);

  return (
    <Card className="h-9/10">
      <CardTitle className="text-5xl font-black text-primary sm:text-5xl text-center">
        {data?.name}
      </CardTitle>
      <CardImage
        className="h-8/10"
        src={data?.image || undefined}
        alt={data?.name || undefined}
      />
      <Specs specs={specs} />
    </Card>
  );
};
