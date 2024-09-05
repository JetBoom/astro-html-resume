import { defineCollection, getCollection, z } from 'astro:content'

const schema = z.object({
    description: z.string(),
    url: z.string().url().optional(),
    icons: z.array(z.string()).optional(),
})

export const ProjectCollection = defineCollection({ schema, type: 'data' })

export type ProjectType = z.infer<typeof schema>

export async function getProjects() {
	let items = await getCollection('projects') ?? []
	return items
}
