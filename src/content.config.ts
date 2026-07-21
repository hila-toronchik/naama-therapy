import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
	loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/articles' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		excerpt: z.string(),
		publishedAt: z.coerce.date(),
		updatedAt: z.coerce.date().optional(),
		category: z.enum([
			'trauma-and-ptsd',
			'addictions-and-compulsive-patterns',
			'anxiety-and-emotional-regulation',
			'life-crises-and-change',
			'relationships-attachment-and-self-worth',
			'online-emotional-therapy',
		]),
		image: z.string().optional(),
		imageAlt: z.string().optional(),
		draft: z.boolean().default(true),
		featured: z.boolean().default(false),
	}),
});

export const collections = { articles };
