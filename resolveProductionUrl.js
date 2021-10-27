const previewSecret = process.env.SANITY_STUDIO_PREVIEW_SECRET; // ensure this is set in .env.production before deploying and .env.development for testing
const projectUrl =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://www.stkildapc.org';


export default function resolveProductionUrl(document) {
  return `${projectUrl}/api/preview?secret=${previewSecret}&slug=${document.slug.current}`;
}
