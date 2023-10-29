import { z, defineCollection } from "astro:content";

const projectCollection = defineCollection({
  type: "content", // v2.5.0 and later
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    description: z.string(),
    date: z.date(),
    highlight: z.boolean().optional(),
  }),
});

export const collections = {
  projects: projectCollection,
};
