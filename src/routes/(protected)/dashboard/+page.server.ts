import { fail } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ request : {}, locals: {supabase} }) => {
	const { data, error } = await supabase.from("books").select("isbn, pages_read")
	return {
		data
	};
};