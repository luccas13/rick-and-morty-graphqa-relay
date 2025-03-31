/**
 * @generated SignedSource<<ff55f49c582b7b8e56cfd9aaf1cf53c2>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type CharacterQuery$variables = {
  id: string;
};
export type CharacterQuery$data = {
  readonly character: {
    readonly __typename: "Character";
    readonly gender: string | null | undefined;
    readonly id: string | null | undefined;
    readonly image: string | null | undefined;
    readonly name: string | null | undefined;
    readonly species: string | null | undefined;
    readonly status: string | null | undefined;
    readonly type: string | null | undefined;
  } | null | undefined;
};
export type CharacterQuery = {
  response: CharacterQuery$data;
  variables: CharacterQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "Character",
    "kind": "LinkedField",
    "name": "character",
    "plural": false,
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
        "name": "type",
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
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CharacterQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CharacterQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "dbf4562437bbfbfb37f8b13f3cbcfb2f",
    "id": null,
    "metadata": {},
    "name": "CharacterQuery",
    "operationKind": "query",
    "text": "query CharacterQuery(\n  $id: ID!\n) {\n  character(id: $id) {\n    id\n    __typename\n    name\n    status\n    species\n    type\n    gender\n    image\n  }\n}\n"
  }
};
})();

(node as any).hash = "36dcb6226e579df3f0df7f194ef9d726";

export default node;
