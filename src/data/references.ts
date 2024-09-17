import { defineCollection, getCollection, z } from 'astro:content'
import { sortByPriority } from '@/util'

const schema = z.object({
    name: z.string(),
    title: z.string(),
    company: z.string(),
    email: z.string().optional(),
    phone: z.string().optional(),
    priority: z.number().optional(),
})

export const ReferenceCollection = defineCollection({ schema, type: 'data' })

export type ReferenceType = z.infer<typeof schema>

export async function getReferences() {
	let items = await getCollection('references')
    items.sort(sortByPriority)
	return items
}
