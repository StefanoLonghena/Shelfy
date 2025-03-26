import { fail, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types.js';

export const actions = {
	default: async ({ request, locals: { supabase } }) => {
		const formData = await request.formData();
		const name = formData.get('name') as string;

		const email = formData.get('email') as string;
		const password = formData.get('password') as string;

		const {
			data: { user },
			error
		} = await supabase.auth.signUp({
			email: email,
			password: password
		});


		if (error?.message) return fail(400, { message: error.message });

		//prima di aggiornare il database di profiles controllo che l'user sia stato creato in auth
		if(user) {
			const { error } = await supabase.from('profiles').update({ name: name }).eq('id', user.id);
			
			if (error?.message) return fail(400, { message: error.message });

	}
}
}