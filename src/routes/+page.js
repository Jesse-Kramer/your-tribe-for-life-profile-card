/** @type {import('./$types').PageLoad} */
import { error } from '@sveltejs/kit';
import getDirectusInstance from '$lib/directus';
import { readItem} from '@directus/sdk';

export async function load({ fetch }) {
	const directus = getDirectusInstance(fetch);

	try {
		const person = await directus.request(readItem('person', 29));

		return { person };
	} catch (err) {
		throw error(404, 'Page not found');
	}
}
