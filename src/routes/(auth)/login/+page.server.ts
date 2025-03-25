import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import type { PageServerLoad } from './$types';

/* export const load: PageServerLoad = async ({ locals, url }) => {
	// Controlla se esiste già una sessione valida
	const { session } = await locals.safeGetSession();

	if (session) {
		// Redirect alla home o pagina protetta
		throw redirect(303, '/dashboard');
	}

	// Se non è autenticato, mostra normalmente la pagina di login
	return {};
}; */

export const actions = {
	login: async ({ request, locals: { supabase } }) => {
		const formData = await request.formData();
		const email = formData.get('email') as string;
		const password = formData.get('password') as string;

		const { error } = await supabase.auth.signInWithPassword({ email: email, password: password });

		if (error) return fail(400, { message: error.message });

		// Reindirizza dopo il login
		throw redirect(303, '/dashboard');
	},
	signup: async ({request, locals: {supabase}}) => {

	}
} satisfies Actions;
