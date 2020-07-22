const previewSecret = '032ac2eecbe611ea87d00242ac130003'; // Copy the string you used for SANITY_PREVIEW_SECRET
const projectUrl =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://stkildapc.org';


export default function resolveProductionUrl(document) {
  return `${projectUrl}/api/preview?secret=${previewSecret}&slug=${document.slug.current}`;
}
