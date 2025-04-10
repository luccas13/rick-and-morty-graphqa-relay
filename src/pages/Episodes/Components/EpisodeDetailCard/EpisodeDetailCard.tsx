import { graphql, useFragment } from "react-relay";
import { EpisodeDetailCardFragment$key } from "@/relay/__generated__/EpisodeDetailCardFragment.graphql";
import { CharactersCard } from "@/pages/Characters/components/CharactersCard/CharactersCard";

const episodeDetailCardFragment = graphql`
  fragment EpisodeDetailCardFragment on Episode {
    id
    name
    episode
    air_date
    characters {
      id
      __typename
      ...CharactersCardFragment
    }
  }
`;

type Props = {
  episodeRef: EpisodeDetailCardFragment$key;
  className?: string;
  onClick?: (id: string | null | undefined) => void;
};

export const EpisodeDetailCard = ({
  episodeRef,
  className,
  onClick,
}: Props) => {
  const data = useFragment(episodeDetailCardFragment, episodeRef);

  return (
    <main
      className={`flex flex-col py-5 h-9/10 justify-between align-middle ${className}`}
      onClick={() => onClick?.(data?.id)}
    >
      <h2 className="text-2xl font-black text-primary sm:text-4xl text-center">
        {`Episode ${data.name} | ${data.episode} - ${data.air_date}`}
      </h2>
      <div className="flex flex-wrap justify-center gap-2 h-85/100 overflow-auto">
        {data.characters &&
          data.characters.map(
            (character, index) =>
              character && (
                <CharactersCard key={index} characterRef={character} />
              )
          )}
      </div>
    </main>
  );
};
