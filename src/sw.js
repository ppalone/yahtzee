import { getFiles, setupPrecaching, setupRouting } from 'preact-cli/sw/';

setupRouting();

const urls = getFiles();
urls.push({
  url: 'https://fonts.googleapis.com',
  revision: null,
});

setupPrecaching(urls);
