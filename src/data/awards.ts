import { defineCollection, getCollection, z } from 'astro:content'

const schema = z.object({
    description: z.string(),
    url: z.string().optional(),
})

export const AwardsCollection = defineCollection({ schema, type: 'data' })

export type AwardType = z.infer<typeof schema>

export async function getAwards() {
	let items = await getCollection('awards') ?? []
    items.sort((a, b) => a.id.localeCompare(b.id))
	return items
}
