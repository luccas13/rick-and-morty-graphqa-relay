/**
 * @generated SignedSource<<1d55190bc8ce6041fcc9a71cc52fcdf1>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type CharactersQuery$variables = {
  gender?: string | null | undefined;
  name?: string | null | undefined;
  page: number;
  species?: string | null | undefined;
  status?: string | null | undefined;
  type?: string | null | undefined;
};
export type CharactersQuery$data = {
  readonly characters: {
    readonly info: {
      readonly count: number | null | undefined;
      readonly next: number | null | undefined;
      readonly pages: number | null | undefined;
      readonly prev: number | null | undefined;
    } | null | undefined;
    readonly results: ReadonlyArray<{
      readonly __typename: "Character";
      readonly id: string | null | undefined;
      readonly image: string | null | undefined;
      readonly name: string | null | undefined;
    } | null | undefined> | null | undefined;
  } | null | undefined;
};
export type CharactersQuery = {
  response: CharactersQuery$data;
  variables: CharactersQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "gender"
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
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "species"
},
v4 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "status"
},
v5 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "type"
},
v6 = [
  {
    "alias": null,
    "args": [
      {
        "fields": [
          {
            "kind": "Variable",
            "name": "gender",
            "variableName": "gender"
          },
          {
            "kind": "Variable",
            "name": "name",
            "variableName": "name"
          },
          {
            "kind": "Variable",
            "name": "species",
            "variableName": "species"
          },
          {
            "kind": "Variable",
            "name": "status",
            "variableName": "status"
          },
          {
            "kind": "Variable",
            "name": "type",
            "variableName": "type"
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
    "concreteType": "Characters",
    "kind": "LinkedField",
    "name": "characters",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Character",
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
            "name": "__typename",
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
            "name": "image",
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
      (v2/*: any*/),
      (v3/*: any*/),
      (v4/*: any*/),
      (v5/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "CharactersQuery",
    "selections": (v6/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v2/*: any*/),
      (v1/*: any*/),
      (v4/*: any*/),
      (v3/*: any*/),
      (v5/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "CharactersQuery",
    "selections": (v6/*: any*/)
  },
  "params": {
    "cacheID": "3c6458f4e73d081ca8c955076bb84d5c",
    "id": null,
    "metadata": {},
    "name": "CharactersQuery",
    "operationKind": "query",
    "text": "query CharactersQuery(\n  $page: Int!\n  $name: String\n  $status: String\n  $species: String\n  $type: String\n  $gender: String\n) {\n  characters(page: $page, filter: {name: $name, status: $status, species: $species, type: $type, gender: $gender}) {\n    results {\n      id\n      __typename\n      name\n      image\n    }\n    info {\n      count\n      pages\n      next\n      prev\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "35187e6bc2e7e895f97d4a496a7d5965";

export default node;
