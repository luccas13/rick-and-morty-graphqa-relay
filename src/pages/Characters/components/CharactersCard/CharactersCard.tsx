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
      className="hover:cursor-pointer h-50 w-50"
    >
      <CardImage
        src={data?.image || undefined}
        alt={data?.name || undefined}
        className="h-75/100 w-75/100"
      />
      <CardTitle
        title={data?.name || ""}
        className="text-[clamp(0.75rem,_3vw,_1rem)] truncate overflow-hidden whitespace-nowrap"
      >
        {data?.name}
      </CardTitle>
    </Card>
  );
};
