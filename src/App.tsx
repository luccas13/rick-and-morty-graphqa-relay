import { Characters } from "@/pages/Characters/Characters";
import { CharacterDetail } from "@/pages/CharacterDetail/CharacterDetail";
import "./App.scss";
import { Suspense, useState } from "react";
import { useQueryLoader } from "react-relay";
import { CharacterQuery } from "@/graphql/queries/CharacterQuery.graphql";
import { CharacterQuery as CharacterQueryTypes } from "@/relay";
import { CharactersQuery$variables as FilterTypes } from "@/relay";

const DEFAULT_PARAMS = { page: 1 };
function App() {
  const [selectedId, setSelectedId] = useState<string | undefined>(undefined);
  const [params, setParams] = useState<FilterTypes>(DEFAULT_PARAMS);

  const [queryReference, loadQuery] =
    useQueryLoader<CharacterQueryTypes>(CharacterQuery);

  const onClickDetailHandler = (id: string) => {
    loadQuery({ id });
    setSelectedId(id);
  };

  const onClickCloseHandler = () => {
    setSelectedId(undefined);
  };

  return (
    <>
      {!selectedId ? (
        <Characters
          params={params}
          onChangeParams={setParams}
          onClickDetail={onClickDetailHandler}
        />
      ) : (
        queryReference && (
          <Suspense fallback={<p>Loading Character...</p>}>
            <CharacterDetail
              queryReference={queryReference}
              onClickClose={onClickCloseHandler}
            />
          </Suspense>
        )
      )}
    </>
  );
}

export default App;
