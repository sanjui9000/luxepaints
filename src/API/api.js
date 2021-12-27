const contentful = require('contentful');

// TODO: Store this in vault
const client = contentful.createClient({
  space: 'kfpwnwmcnmo3',
  accessToken: 'ZFls4BafOoM35NcwXCwe6_iPUdKitW8qwv3rf5s1zhY',
});

export default client;
