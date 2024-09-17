import { defineCollection, getCollection, z } from 'astro:content'

const schema = z.object({
    name: z.string(),
    title: z.string(),
    email: z.string(),
    phone: z.string(),
    linkedin: z.string(),
    github: z.string(),
    website: z.string(),
    location: z.string(),
})

export const MySelfCollection = defineCollection({ schema, type: 'content' })

export type MySelfType = z.infer<typeof schema>

export async function getMySelf() {
	let items = await getCollection('myself')
	return items[0].data
}
