import { defineCollection, getCollection, z } from 'astro:content'
import { sortByPriority } from '@/util'

const schema = z.object({
    name: z.string(),
    icons: z.array(z.string()).optional(),
    priority: z.number().optional(),
})

export const ProjectCollection = defineCollection({ schema, type: 'content' })

export type ProjectType = z.infer<typeof schema>

export async function getProjects() {
	let items = await getCollection('projects')
    items.sort(sortByPriority)
	return items
}
