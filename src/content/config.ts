import { z, defineCollection } from "astro:content";

const projectCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    description: z.string(),
    date: z.date(),
    updatedDate: z.date().optional(),
    highlight: z.boolean().optional(),
  }),
});

const aboutCollection = defineCollection({
  type: "content", // v2.5.0 and later
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.date(),
    updatedDate: z.date().optional(),
  }),
});

export const collections = {
  projects: projectCollection,
  about: aboutCollection,
};
