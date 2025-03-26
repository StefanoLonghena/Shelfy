import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions = {
	default: async ({ request, locals: { supabase } }) => {
		const formData = await request.formData();
		const email = formData.get('email') as string;
		const password = formData.get('password') as string;

		const { error } = await supabase.auth.signInWithPassword({ email: email, password: password });

		if (error) return fail(400, { message: error.message, email: email });

		// Reindirizza dopo il login
		throw redirect(303, '/dashboard');
	},
	
} satisfies Actions;
