import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'pocheco-pachico',
  apiKey: process.env.API_KEY,
});