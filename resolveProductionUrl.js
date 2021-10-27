const previewSecret = process.env.SANITY_STUDIO_PREVIEW_SECRET; // ensure this is set in .env before deploying
const projectUrl =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://stkildapc.org';


export default function resolveProductionUrl(document) {
  return `${projectUrl}/api/preview?secret=${previewSecret}&slug=${document.slug.current}`;
}
