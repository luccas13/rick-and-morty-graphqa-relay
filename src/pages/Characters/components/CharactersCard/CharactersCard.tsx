import { Card, CardImage, CardTitle } from "@/components";
import { graphql, useFragment } from "react-relay";
import { CharactersCardFragment$key } from "@/relay/__generated__/CharactersCardFragment.graphql";

type Props = {
  characterRef: CharactersCardFragment$key;
  onClick?: (id: string | null | undefined) => void;
};

export const CharactersCard = ({ characterRef, onClick }: Props) => {
  const data = useFragment(
    graphql`
      fragment CharactersCardFragment on Character {
        id
        name
        image
      }
    `,
    characterRef
  );

  const onClickCard = (id: string | null | undefined) => {
    onClick?.(id);
  };

  return (
    <Card
      key={data?.id}
      onClick={() => onClickCard(data?.id)}
      className="hover:cursor-pointer"
    >
      <CardImage src={data?.image || undefined} alt={data?.name || undefined} />
      <CardTitle className="text-xl">{data?.name}</CardTitle>
    </Card>
  );
};
