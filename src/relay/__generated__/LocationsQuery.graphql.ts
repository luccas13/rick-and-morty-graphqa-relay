/**
 * @generated SignedSource<<e4b5b953e2ae2aefd6989e79e0c662cf>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type LocationsQuery$variables = {
  dimension?: string | null | undefined;
  name?: string | null | undefined;
  page: number;
  type?: string | null | undefined;
};
export type LocationsQuery$data = {
  readonly locations: {
    readonly info: {
      readonly count: number | null | undefined;
      readonly next: number | null | undefined;
      readonly pages: number | null | undefined;
      readonly prev: number | null | undefined;
    } | null | undefined;
    readonly results: ReadonlyArray<{
      readonly dimension: string | null | undefined;
      readonly id: string | null | undefined;
      readonly name: string | null | undefined;
      readonly type: string | null | undefined;
    } | null | undefined> | null | undefined;
  } | null | undefined;
};
export type LocationsQuery = {
  response: LocationsQuery$data;
  variables: LocationsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "dimension"
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
  "name": "type"
},
v4 = [
  {
    "alias": null,
    "args": [
      {
        "fields": [
          {
            "kind": "Variable",
            "name": "dimension",
            "variableName": "dimension"
          },
          {
            "kind": "Variable",
            "name": "name",
            "variableName": "name"
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
    "concreteType": "Locations",
    "kind": "LinkedField",
    "name": "locations",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Location",
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
            "name": "type",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "dimension",
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
      (v3/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "LocationsQuery",
    "selections": (v4/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v2/*: any*/),
      (v1/*: any*/),
      (v3/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "LocationsQuery",
    "selections": (v4/*: any*/)
  },
  "params": {
    "cacheID": "dd85eb2fbe3af358a7fff3831096863e",
    "id": null,
    "metadata": {},
    "name": "LocationsQuery",
    "operationKind": "query",
    "text": "query LocationsQuery(\n  $page: Int!\n  $name: String\n  $type: String\n  $dimension: String\n) {\n  locations(page: $page, filter: {name: $name, type: $type, dimension: $dimension}) {\n    results {\n      id\n      name\n      type\n      dimension\n    }\n    info {\n      count\n      pages\n      next\n      prev\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "229ee696996051e44ed05634fe361c58";

export default node;
