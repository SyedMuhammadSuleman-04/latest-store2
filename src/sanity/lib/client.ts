import { createClient } from "next-sanity";

// import { apiVersion, dataset, projectId } from '../env'

// export const client = createClient({
//   projectId,
//   dataset,
//   apiVersion,

//   useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
// })

import { apiVersion, dataset, projectId } from "../env";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2025-01-26",
  useCdn: false,
  // Set to false if statically generating pages, using ISR or tag-based revalidation
});

// const sanityClient = createClient({
//   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
//   dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
//   useCdn: false,
//   apiVersion: "2025-01-26",
//   token: process.env.SANITY_API_TOKEN, // Secure Token
// });
