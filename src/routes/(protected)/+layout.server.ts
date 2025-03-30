//fetching data here to share for all children pages?
//or using store?

import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ locals: { supabase } }) => {
	const { data, error } = await supabase.from('books').select('isbn, pages_read');
	return {
		data: data
	};
};
