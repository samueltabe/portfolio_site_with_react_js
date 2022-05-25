import sanityClient from '@sanity/client';
import imgageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
    dataset: 'production',
    apiVersion: '2022-02-01',
    useCdn: true,
    TOKEN: process.env.REACT_APP_SANITY_TOKEN,
})

const builder = imgageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);