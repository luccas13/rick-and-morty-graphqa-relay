import { ListItem, ListItemSubtitle, ListItemTitle } from "@/components";
import { useFragment } from "react-relay";
import { graphql } from "relay-runtime";
import { EpisodesListItemFragment$key } from "@/relay/__generated__/EpisodesListItemFragment.graphql";

const EpisodesListItemFragment = graphql`
  fragment EpisodesListItemFragment on Episode {
    id
    name
    air_date
    episode
  }
`;

type Props = {
  episodeRef: EpisodesListItemFragment$key;
  className?: string;
  onClick?: (id: string | null | undefined) => void;
};

export const EpisodesListItem = ({ episodeRef, className, onClick }: Props) => {
  const data = useFragment(EpisodesListItemFragment, episodeRef);

  const onClickEpisode = (id: string | null | undefined) => {
    onClick?.(id);
  };

  return (
    <ListItem
      className={className}
      key={data.id}
      onClick={() => onClickEpisode(data?.id)}
    >
      <ListItemTitle>{data?.name}</ListItemTitle>
      <ListItemSubtitle>
        {data?.episode} - {data?.air_date}
      </ListItemSubtitle>
    </ListItem>
  );
};
