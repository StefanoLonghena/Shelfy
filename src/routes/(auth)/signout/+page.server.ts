import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions = {
	default: async ({locals: { supabase }, cookies}) => {
		const { error } = await supabase.auth.signOut()

		if (!error) {
			cookies.delete('sb-access-token', { path: '/' });
			cookies.delete('sb-refresh-token', { path: '/' });

		throw redirect(303, '/login');
	}
	}
} satisfies Actions