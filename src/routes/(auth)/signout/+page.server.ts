import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions = {
	default: async ({ locals: { supabase }, cookies }) => {
		const { error } = await supabase.auth.signOut({ scope: 'local' });

		if (error) return fail(404, {message: "failed to signout"})

		throw redirect(303, '/login');
	}
} satisfies Actions;
