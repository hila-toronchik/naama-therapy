import { readdir } from 'node:fs/promises';
import { join } from 'node:path';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
	try {
		// Get the correct path - in Astro, public folder is at the root
		const galleryPath = join(process.cwd(), 'public', 'images', 'art-therapy-gallery');
		const files = await readdir(galleryPath);
		
		// Serve the optimized gallery assets only.
		const imageFiles = files.filter((file) => 
			/\.webp$/i.test(file)
		);
		
		// Sort files for consistent ordering
		imageFiles.sort();
		
		// Return image paths
		const imagePaths = imageFiles.map((file) => `/images/art-therapy-gallery/${file}`);
		
		return new Response(JSON.stringify(imagePaths), {
			headers: {
				'Content-Type': 'application/json',
			},
		});
	} catch (error) {
		// If folder doesn't exist or is empty, return empty array
		console.error('Error reading gallery folder:', error);
		return new Response(JSON.stringify([]), {
			headers: {
				'Content-Type': 'application/json',
			},
		});
	}
};
