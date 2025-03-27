/**
 * @generated SignedSource<<9644ef2b738b02f85546109d3573fcf3>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type CharactersQuery$variables = Record<PropertyKey, never>;
export type CharactersQuery$data = {
  readonly characters: {
    readonly results: ReadonlyArray<{
      readonly gender: string | null | undefined;
      readonly id: string | null | undefined;
      readonly image: string | null | undefined;
      readonly name: string | null | undefined;
      readonly species: string | null | undefined;
      readonly status: string | null | undefined;
    } | null | undefined> | null | undefined;
  } | null | undefined;
};
export type CharactersQuery = {
  response: CharactersQuery$data;
  variables: CharactersQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
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
            "name": "name",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "status",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "species",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "gender",
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
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "CharactersQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "CharactersQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "78cf3c0a8f1d4b6599f7d15eb3d9fa47",
    "id": null,
    "metadata": {},
    "name": "CharactersQuery",
    "operationKind": "query",
    "text": "query CharactersQuery {\n  characters {\n    results {\n      id\n      name\n      status\n      species\n      gender\n      image\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "3404662117df10ad558f1ae9e80358a7";

export default node;
