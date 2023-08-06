/* eslint-disable import/no-extraneous-dependencies */
import { CodegenConfig } from '@graphql-codegen/cli';
import 'dotenv/config';

const bearerToken = process.env.SGG_TOKEN;
// A bearer token with Start.gg must be provided to be able to introspect anything.
// I don't want to accidentally commit mine. :)
if (!bearerToken) {
  throw new Error('Bearer token must be provided.');
}

const config: CodegenConfig = {
  schema: [
    {
      'https://api.start.gg/gql/alpha': {
        headers: {
          Authorization: 'Bearer ' + process.env.SGG_TOKEN
        }
      }
    }
  ],
  documents: ['src/queries/*.graphql'],
  generates: {
    './generated/types.d.ts': {
      plugins: [
        {
          add: {
            placement: 'prepend',
            content: '/* This file is auto-generated. Do not edit. */ \ndeclare namespace StartGG {'
          }
        },
        {
          add: {
            placement: 'append',
            content: '}'
          }
        },
        'typescript'
      ],
      config: {
        preResolveTypes: true,
        enumsAsTypes: true,
        allowEnumStringTypes: true,
        scalars: {
          JSON: '{ [key: string]: any }',
          Timestamp: 'number'
        },
        noExport: true
      }
    },
    './generated/sdk.ts': {
      plugins: [
        {
          add: {
            content: '/* This file is auto-generated. Do not edit. */'
          }
        },
        'typescript',
        'typescript-operations',
        'typescript-graphql-request'
      ],
      config: {
        preResolveTypes: true,
        enumsAsTypes: true,
        allowEnumStringTypes: true,
        scalars: {
          JSON: '{ [key: string]: any }',
          Timestamp: 'number'
        },
        rawRequest: true,
        dedupeOperationSuffix: true
      }
    },
    './generated/schema.json': {
      plugins: ['introspection'],
      config: {
        minify: true
      }
    }
  },
  ignoreNoDocuments: false,
  verbose: true
};

export default config;
