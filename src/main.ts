import { GraphQLClient } from 'graphql-request';
import { getSdk } from '../generated/sdk'; // This file is generated.
import 'dotenv/config';

async function main() {
  console.log('Testing graphql-request SDK setup...');
  const client = new GraphQLClient('https://api.start.gg/gql/alpha', {
    headers: {
      Authorization: 'Bearer ' + process.env.SGG_TOKEN
    }
  });
  const sdk = getSdk(client);
  const { data } = await sdk.EventStandings({ eventId: '829440', page: 1, perPage: 20 });
  console.log('Who won BoBC5 Melee Singles?');
  console.log(`GraphQL results:`, data.event.standings.nodes[0].entrant);
}

main();
