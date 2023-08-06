/**
 * This is a helper file utility, used to kind of just test to see if the types
 *  generated are not insane and just queries more manually than anything else.
 *  This should output approximately the same as the graphql-code-generator introspection plugin.
 */
import 'dotenv/config';
import * as fs from 'fs';
import { getIntrospectionQuery } from 'graphql';

const bearerToken = process.env.SGG_TOKEN;

// You don't get the full depth of the types if you use the default introspection query.
//  If you want the FULL depth, set this to true.
const useFullQuery = false;

// A bearer token with Start.gg must be provided to be able to introspect anything.
if (!bearerToken) {
  throw new Error('Bearer token must be provided.');
}

// Fetch the Introspection query results from Start.GG.
let introspectionBody = JSON.stringify({ variables: {}, query: getIntrospectionQuery({ descriptions: false }) });

// todo: format this query to not be a length representation of the time passed waiting for a write api
if (useFullQuery) {
  // This is the hell-string query pulled from the depths of GraphiQL.
  introspectionBody =
    '{"query":"\\n    query IntrospectionQuery {\\n      __schema {\\n        \\n        queryType { name }\\n        mutationType { name }\\n        subscriptionType { name }\\n        types {\\n          ...FullType\\n        }\\n        directives {\\n          name\\n          description\\n          \\n          locations\\n          args {\\n            ...InputValue\\n          }\\n        }\\n      }\\n    }\\n\\n    fragment FullType on __Type {\\n      kind\\n      name\\n      description\\n      \\n      fields(includeDeprecated: true) {\\n        name\\n        description\\n        args {\\n          ...InputValue\\n        }\\n        type {\\n          ...TypeRef\\n        }\\n        isDeprecated\\n        deprecationReason\\n      }\\n      inputFields {\\n        ...InputValue\\n      }\\n      interfaces {\\n        ...TypeRef\\n      }\\n      enumValues(includeDeprecated: true) {\\n        name\\n        description\\n        isDeprecated\\n        deprecationReason\\n      }\\n      possibleTypes {\\n        ...TypeRef\\n      }\\n    }\\n\\n    fragment InputValue on __InputValue {\\n      name\\n      description\\n      type { ...TypeRef }\\n      defaultValue\\n      \\n      \\n    }\\n\\n    fragment TypeRef on __Type {\\n      kind\\n      name\\n      ofType {\\n        kind\\n        name\\n        ofType {\\n          kind\\n          name\\n          ofType {\\n            kind\\n            name\\n            ofType {\\n              kind\\n              name\\n              ofType {\\n                kind\\n                name\\n                ofType {\\n                  kind\\n                  name\\n                  ofType {\\n                    kind\\n                    name\\n                  }\\n                }\\n              }\\n            }\\n          }\\n        }\\n      }\\n    }\\n  ","operationName":"IntrospectionQuery"}';
}

const res: Response = await fetch('https://api.start.gg/gql/alpha', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'authorization': `Bearer ${bearerToken}`
  },
  body: introspectionBody
});

// Get the results as a JSON.
const data = await res.json();

// When an API call to the Start.gg API endpoint fails, it returns a `success` property of false.
if (data.success === false) {
  let errorString = `API call to get introspection JSON from start.gg failed with error ${data.message}.`;
  errorString += ` If this persists, contact sgg support team with error code ${data.errorId}`;
  throw new Error(errorString);
}

// one callback for old time's sake
fs.writeFile('./generated/schema.json', JSON.stringify(data), 'utf-8', (err) => {
  if (err) throw err;
});

console.log('Successfully wrote start.gg introspection schema to a file. yay?');
