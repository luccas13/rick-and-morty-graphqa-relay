import { Card, CardImage, CardTitle, List, Specs } from "@/components";
import { graphql, useFragment } from "react-relay";
import { CharacterDetailCardFragment$key } from "@/relay/__generated__/CharacterDetailCardFragment.graphql";
import { useMemo } from "react";
import { EpisodesListItem } from "@/pages/Episodes/Components/EpisodesListItem/EpisodesListItem";

const characterDetailCardFragment = graphql`
  fragment CharacterDetailCardFragment on Character {
    name
    status
    species
    type
    gender
    origin {
      id
      __typename
      name
    }
    location {
      id
      __typename
      name
    }
    episode {
      id
      __typename
      ...EpisodesListItemFragment
    }
    image
  }
`;

type Props = {
  characterRef: CharacterDetailCardFragment$key;
};
export const CharacterDetailCard = ({ characterRef }: Props) => {
  const data = useFragment(characterDetailCardFragment, characterRef);

  const specs = useMemo(
    () => [
      { title: "Gender", value: data?.gender },
      { title: "Specie", value: data?.species },
      { title: "Status", value: data?.status },
      { title: "Origin", value: data?.origin?.name },
      { title: "Location", value: data?.location?.name },
    ],
    [data]
  );

  return (
    <main className="w-full h-full flex justify-center gap-20">
      <Card className="h-9/10">
        <CardImage
          className="h-8/10"
          src={data?.image || undefined}
          alt={data?.name || undefined}
        />
        <CardTitle className="text-5xl font-black text-primary sm:text-5xl text-center">
          {data?.name}
        </CardTitle>
        <Specs specs={specs} />
      </Card>
      <Card className="flex gap-10 h-9/10">
        <CardTitle className="text-4xl font-black text-primary sm:text-4xl text-center">
          Episodes
        </CardTitle>
        <List direction="vertical" className="h-9/10 overflow-auto">
          {data.episode.length > 0 &&
            data.episode.map(
              (episode) =>
                episode && (
                  <EpisodesListItem
                    key={episode.id}
                    episodeRef={episode}
                    className="text-center hover:cursor-pointer"
                    onClick={() => {}}
                  />
                )
            )}
        </List>
      </Card>
    </main>
  );
};
