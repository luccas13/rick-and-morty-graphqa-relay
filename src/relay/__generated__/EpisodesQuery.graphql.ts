/**
 * @generated SignedSource<<1a7d40adcde5fecdd67d597feb38da22>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type EpisodesQuery$variables = {
  episode?: string | null | undefined;
  name?: string | null | undefined;
  page: number;
};
export type EpisodesQuery$data = {
  readonly episodes: {
    readonly info: {
      readonly count: number | null | undefined;
      readonly next: number | null | undefined;
      readonly pages: number | null | undefined;
      readonly prev: number | null | undefined;
    } | null | undefined;
    readonly results: ReadonlyArray<{
      readonly __typename: "Episode";
      readonly air_date: string | null | undefined;
      readonly episode: string | null | undefined;
      readonly id: string | null | undefined;
      readonly name: string | null | undefined;
    } | null | undefined> | null | undefined;
  } | null | undefined;
};
export type EpisodesQuery = {
  response: EpisodesQuery$data;
  variables: EpisodesQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "episode"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "name"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "page"
},
v3 = [
  {
    "alias": null,
    "args": [
      {
        "fields": [
          {
            "kind": "Variable",
            "name": "episode",
            "variableName": "episode"
          },
          {
            "kind": "Variable",
            "name": "name",
            "variableName": "name"
          }
        ],
        "kind": "ObjectValue",
        "name": "filter"
      },
      {
        "kind": "Variable",
        "name": "page",
        "variableName": "page"
      }
    ],
    "concreteType": "Episodes",
    "kind": "LinkedField",
    "name": "episodes",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Episode",
        "kind": "LinkedField",
        "name": "results",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "name",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "__typename",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "air_date",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "episode",
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Info",
        "kind": "LinkedField",
        "name": "info",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "count",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "pages",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "next",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "prev",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "EpisodesQuery",
    "selections": (v3/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v2/*: any*/),
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "EpisodesQuery",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "f9f841adf063151731710802e30d3706",
    "id": null,
    "metadata": {},
    "name": "EpisodesQuery",
    "operationKind": "query",
    "text": "query EpisodesQuery(\n  $page: Int!\n  $name: String\n  $episode: String\n) {\n  episodes(page: $page, filter: {name: $name, episode: $episode}) {\n    results {\n      id\n      name\n      __typename\n      air_date\n      episode\n    }\n    info {\n      count\n      pages\n      next\n      prev\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "c7d15df4b50a5b4915c07cd9d09cbaee";

export default node;
